import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Jet from "../assets/Images/jet.png";

export default function JetCursor() {
  const movementSpeed = useMotionValue(0);

  const exhaustBoost = useSpring(movementSpeed, {
    stiffness: 120,
    damping: 20,
  });
  const targetX = useMotionValue(-100);
  const targetY = useMotionValue(-100);
  const targetRotation = useMotionValue(0);
  const targetBank = useMotionValue(0);

  const bank = useSpring(targetBank, {
    stiffness: 120,
    damping: 14,
    mass: 0.5,
  });

  // Smooth spring-following movement
  const x = useSpring(targetX, {
    stiffness: 90,
    damping: 18,
    mass: 0.8,
  });

  const y = useSpring(targetY, {
    stiffness: 90,
    damping: 18,
    mass: 0.8,
  });

  const rotation = useSpring(targetRotation, {
    stiffness: 100,
    damping: 16,
    mass: 0.6,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mouse/trackpad only; don't interfere with touch devices.
    const isDesktop = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );

    if (!isDesktop.matches) {
      return;
    }

    let previousX = 0;
    let previousY = 0;
    let hasMoved = false;

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      targetX.set(mouseX);
      targetY.set(mouseY);

      const dx = mouseX - previousX;
      const dy = mouseY - previousY;

      if (hasMoved && Math.hypot(dx, dy) > 1) {
        // Sprite nose points upward by default.
        // +90° aligns it with the direction of travel.
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;

        // Keep rotation continuous across the ±180° boundary.
        const currentAngle = targetRotation.get();

        const difference = ((((angle - currentAngle) % 360) + 540) % 360) - 180;

        targetRotation.set(currentAngle + difference);

        // Sharp turns create a banking impulse.
        const bankAmount = Math.max(-16, Math.min(16, difference * 0.7));

        targetBank.set(bankAmount);

        // Spring naturally returns the jet to neutral.
        requestAnimationFrame(() => {
          targetBank.set(0);
        });
      }

      previousX = mouseX;
      previousY = mouseY;
      hasMoved = true;

      setVisible(true);
    };

    const handlePointerLeave = () => setVisible(false);
    const handlePointerEnter = () => setVisible(true);

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
    };
  }, [targetX, targetY, targetRotation, targetBank]);

  // Trail Effects

  const canvasRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );

    if (!isDesktop.matches) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const particles = [];
    const colors = ["#00E5FF", "#168BFF", "#FF8A00", "#FFFFFF"];
    const maxParticles = 80;

    let animationId;
    let previousTime = 0;
    let lastSpawn = 0;
    let previousX = x.get();
    let previousY = y.get();

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = (time) => {
      animationId = requestAnimationFrame(animate);

      const dt = previousTime ? Math.min((time - previousTime) / 16.67, 2) : 1;

      previousTime = time;

      const px = x.get();
      const py = y.get();
      const angle = (rotation.get() * Math.PI) / 180;

      const dx = px - previousX;
      const dy = py - previousY;
      const currentSpeed = Math.hypot(dx, dy);

      // Normalize speed to a value between 0 and 1.
      movementSpeed.set(Math.min(currentSpeed / 18, 1));

      previousX = px;
      previousY = py;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Spawn more particles while moving quickly.
      if (currentSpeed > 0.15 && time - lastSpawn > 16) {
        lastSpawn = time;

        const count = Math.min(3, 1 + Math.floor(currentSpeed / 6));

        // Jet nose points upward; exhaust comes out behind it.
        const tailAngle = angle + Math.PI / 2;
        const tailX = Math.cos(tailAngle);
        const tailY = Math.sin(tailAngle);

        for (let i = 0; i < count; i++) {
          if (particles.length >= maxParticles) {
            particles.shift();
          }

          const life = 35 + Math.random() * 25;
          const spread = (Math.random() - 0.5) * 8;
          const color = colors[Math.floor(Math.random() * colors.length)];

          particles.push({
            x: px + tailX * 22 + spread,
            y: py + tailY * 22 + spread,
            vx: tailX * (1 + Math.random() * 1.5) - dx * 0.12,
            vy: tailY * (1 + Math.random() * 1.5) - dy * 0.12,
            life,
            maxLife: life,
            size: 2 + Math.random() * 3,
            color,
          });
        }
      }

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;
        const radius = p.size * (0.25 + progress * 0.75);

        ctx.globalAlpha = progress;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      const boost = exhaustBoost.get();

      if (boost > 0.04) {
        const angle = (rotation.get() * Math.PI) / 180;
        const tailAngle = angle + Math.PI / 2;

        const tailX = Math.cos(tailAngle);
        const tailY = Math.sin(tailAngle);

        const startX = x.get() + tailX * 18;
        const startY = y.get() + tailY * 18;

        const length = 10 + boost * 38;
        const width = 2 + boost * 5;

        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.45 + boost * 0.55;

        const gradient = ctx.createLinearGradient(
          startX,
          startY,
          startX + tailX * length,
          startY + tailY * length,
        );

        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.3, "#00E5FF");
        gradient.addColorStop(0.7, "#168BFF");
        gradient.addColorStop(1, "rgba(255, 138, 0, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + tailX * length, startY + tailY * length);
        ctx.stroke();

        ctx.restore();
      }

      ctx.restore();
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [x, y, rotation]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      <motion.img
        src={Jet}
        alt=""
        aria-hidden="true"
        draggable={false}
        initial={false}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x,
          y,
          rotate: rotation,
          skewX: bank,
          translateX: "-50%",
          translateY: "-50%",
          width: 64,
          height: 64,
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
