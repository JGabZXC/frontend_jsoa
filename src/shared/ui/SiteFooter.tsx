import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { appRoutes, primaryNavigationItems } from "../../app/routes";
import logo from "../../assets/jsoa_logo.jpg";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] text-[#F3F3F3] border-t border-[#222] pt-20 pb-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full bg-[#B30000]/15 blur-[140px]" />
        <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-[#8C6B3E]/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0),rgba(10,10,10,0.65))]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[#222] pb-10 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden border border-[#333] bg-black">
              <img
                src={logo}
                alt="JSOA logo"
                className="h-full w-full object-cover mix-blend-luminosity opacity-80"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6B3E]">
                JSOA
              </span>
              <span className="text-2xl font-black uppercase tracking-tighter">
                Jesus Christ Savior of All
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to={appRoutes.planVisit}
              className="border border-[#333] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-colors hover:bg-[#F3F3F3] hover:text-[#0A0A0A]"
            >
              Plan a Visit
            </Link>
            <Link
              to={appRoutes.prayerRequest}
              className="bg-[#B30000] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-colors hover:bg-[#D10A0A]"
            >
              Prayer Request
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#777]">
              Our mission
            </p>
            <p className="mt-6 text-[#A0A0A0] leading-relaxed">
              "Go therefore and make disciples of all nations, baptizing them in
              the name of the Father and of the Son and of the Holy Spirit."
            </p>
            <p className="mt-6 text-sm font-mono uppercase tracking-[0.2em] text-[#777]">
              Sundays and weekly gatherings - all are welcome.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#777]">
              Navigation
            </p>
            <ul className="mt-6 space-y-4">
              {primaryNavigationItems.map((item) => {
                const to = item.hash ? `${item.to}${item.hash}` : item.to;
                return (
                  <li key={item.label}>
                    <Link
                      to={to}
                      className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#888] transition-colors hover:text-[#F3F3F3]"
                    >
                      {item.label}
                      <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[#B30000] transition-transform group-hover:scale-x-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border border-[#222] bg-[#0B0B0B] p-8">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#777]">
              Stay connected
            </p>
            <h3 className="mt-4 text-2xl font-black uppercase tracking-tighter">
              Weekly updates, zero noise.
            </h3>
            <p className="mt-4 text-sm text-[#A0A0A0]">
              Devotionals and service reminders delivered with care.
            </p>
            <div className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-[#333] bg-[#0A0A0A] px-5 py-4 text-sm font-semibold text-[#F3F3F3] placeholder:text-[#666] focus:border-[#B30000] focus:outline-none"
              />
              <button className="w-full bg-[#B30000] py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F3F3F3] transition-colors hover:bg-[#D10A0A]">
                Subscribe
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://facebook.com/jcsaviorofall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#333] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-colors hover:border-[#2E5E8C] hover:text-[#2E5E8C]"
              >
                <span className="flex h-8 w-8 items-center justify-center bg-[#2E5E8C] text-[#0A0A0A]">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </span>
                Facebook
              </a>
              <Link
                to={appRoutes.prayerRequest}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3F3F3] transition-colors hover:text-[#B30000]"
              >
                <Mail size={14} /> Prayer Request
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#222] pt-8 text-[10px] font-mono uppercase tracking-[0.35em] text-[#666] md:flex-row md:items-center">
          <span>
            (c) 1996 - {currentYear} Jesus Christ the Savior of All Church
          </span>
          <span>Assemblies of God</span>
        </div>
      </div>
    </footer>
  );
}
