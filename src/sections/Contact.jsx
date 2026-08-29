import { motion } from "framer-motion";
import { EmailBox } from "../components/Emailbox";

export function Contact() {
  return (
    <motion.section
    initial={{opacity: 0, y: 40}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 0.6, ease: "easeOut"}}
    viewport={{once: true}}
      id="contact"
      className="w-screen min-h-screen bg-[#050710] px-4 lg:px-18 py-16 text-white overflow-x-hidden relative scroll-mt-10"
    >
      {/* Decorative dot grid top-right */}
      <div className="absolute top-8 right-10 grid grid-cols-6 gap-1.5 opacity-30 hidden lg:grid">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-[#E6AE5C] text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6AE5C] inline-block" />
          Get In Touch
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6AE5C] inline-block" />
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Dubai] leading-tight">
          Let&apos;s Build Something
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Dubai] leading-tight">
          <span className="text-[#E6AE5C]">Amazing </span>
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            Together.
          </span>
        </h2>
        <p className="text-gray-400 mt-5 text-sm md:text-base leading-relaxed">
          Have a project in mind, a question, or just want to say hi?
          <br />
          I&apos;d love to hear from you.
        </p>
      </div>

      {/* Main Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* LEFT PANEL */}
        <div className="flex flex-col gap-4 bg-[#0A0D18]/60 border border-white/10 rounded-3xl p-7 backdrop-blur-md">
          {/* Icon + Headline */}
          <div className="flex items-start gap-4 mb-2">
            <div className="w-14 h-14 rounded-2xl bg-[#E6AE5C]/10 border border-[#E6AE5C]/40 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-7 h-7 text-[#E6AE5C]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white leading-tight">
                Let&apos;s connect and
                <br />
                turn ideas into <span className="text-[#E6AE5C]">impact.</span>
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                I&apos;m always open to discussing new opportunities,
                collaborations or interesting projects. Drop me a message and
                I&apos;ll get back to you soon!
              </p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-2">
            {/* Email */}
            <a
              href="mailto:iamayushsharma.12@gmail.com"
              id="contact-email-link"
              className="flex items-center justify-between p-4 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-[#E6AE5C]/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6AE5C]/15 border border-[#E6AE5C]/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#E6AE5C]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-xs text-[#E6AE5C]">
                    iamayushsharma.12@gmail.com
                  </p>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-gray-500 group-hover:text-[#E6AE5C] transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayush-sharma-5a7925325/"
              target="_blank"
              rel="noreferrer"
              id="contact-linkedin-link"
              className="flex items-center justify-between p-4 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-blue-500/40 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-600/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">LinkedIn</p>
                  <p className="text-xs text-blue-400">
                    linkedin.com/in/ayush-sharma-5a7925325/
                  </p>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/I-am-Ayush-Sharma"
              target="_blank"
              rel="noreferrer"
              id="contact-github-link"
              className="flex items-center justify-between p-4 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-purple-500/40 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-600/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">GitHub</p>
                  <p className="text-xs text-purple-400">
                    github.com/I-am-Ayush-Sharma
                  </p>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/DWN4cKMaY4GGeeoT7"
              id="contact-location"
              className="flex items-center justify-between p-4 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-orange-500/40 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-xs text-orange-400">
                    Faridabad, Haryana, India
                  </p>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>

          {/* Schedule Call Banner */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E6AE5C]/20 bg-green-500/10 mt-1">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.478-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.133-.132.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.509h-.57c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.077 4.49.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.147h-.004a9.86 9.86 0 01-5.027-1.38L3.5 21l.941-3.45a9.87 9.87 0 1117.43-5.52 9.87 9.87 0 01-9.82 9.499zm8.35-17.425A11.86 11.86 0 0012.057.565C5.495.565.16 5.899.16 12.461c0 2.1.55 4.15 1.596 5.956L.065 24l5.728-1.666a11.87 11.87 0 006.26 1.777h.005c6.56 0 11.897-5.334 11.897-11.896a11.87 11.87 0 00-3.554-8.111z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">
                  Prefer a quick chat?
                </p>
                <p className="text-xs text-gray-400">Say Hi on Whatsapp!</p>
              </div>
            </div>
            <a href="https://wa.link/vp5m5m">
              <button
                id="schedule-call-btn"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-green-500  text-xs font-medium hover:bg-green-500/10 transition-all duration-200 cursor-pointer"
              >
                Open Whatsapp
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL (Form) Email Box Component */}
        <EmailBox />
      </div>

      {/* FOOTER BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto mt-6 p-5 bg-[#0A0D18]/60 border border-white/10 rounded-2xl backdrop-blur-md">
        <div className="flex items-start gap-3">
          <svg
            className="w-7 h-7 text-[#E6AE5C] opacity-60 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-300 text-sm leading-relaxed">
            Great ideas start with a conversation.
            <br />
            Let&apos;s start{" "}
            <span className="text-[#E6AE5C] font-semibold">yours.</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm mr-1">Find me on</span>

          <a
            href="https://www.linkedin.com/in/ayush-sharma-5a7925325/"
            target="_blank"
            rel="noreferrer"
            id="footer-linkedin"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-blue-600/40 bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/25 hover:border-blue-600/70 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://github.com/I-am-Ayush-Sharma"
            target="_blank"
            rel="noreferrer"
            id="footer-github"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-purple-600/40 bg-purple-600/10 flex items-center justify-center hover:bg-purple-600/25 hover:border-purple-600/70 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href=""
            onClick={() =>
              alert(
                "No Twitter/X account right now, but i'll make one in future",
              )
            }
            rel="noreferrer"
            id="footer-twitter"
            aria-label="Twitter"
            className="w-10 h-10 rounded-full border border-sky-500/40 bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/25 hover:border-sky-500/70 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-sky-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>

          <a
            href="mailto:iamayushsharma.12@gmail.com"
            id="footer-email"
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-[#E6AE5C]/40 bg-[#E6AE5C]/10 flex items-center justify-center hover:bg-[#E6AE5C]/25 hover:border-[#E6AE5C]/70 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-[#E6AE5C]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
