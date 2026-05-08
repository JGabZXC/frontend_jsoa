import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { appRoutes, primaryNavigationItems } from "../../app/routes";
import logo from "../../assets/jsoa_logo.jpg";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled || isOpen
          ? "bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-[#222] shadow-[0_12px_40px_rgba(0,0,0,0.35)] py-4"
          : "bg-transparent border-transparent py-4 lg:bg-transparent lg:backdrop-blur-0 lg:border-transparent lg:shadow-none"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex-shrink-0 flex items-center group cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-12 h-12 rounded-none overflow-hidden flex items-center justify-center mr-4 border border-[#333] transition-all group-hover:border-[#B30000] bg-black">
              <img
                src={logo}
                alt="JSOA logo"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-[#F3F3F3] uppercase leading-none">
                JSOA
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6B3E] uppercase mt-1">
                Jesus Christ Savior of All
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-10 xl:space-x-12">
            {primaryNavigationItems.map((link) => {
              const to = link.hash ? `${link.to}${link.hash}` : link.to;
              return (
                <NavLink
                  key={link.label}
                  to={to}
                  className={({ isActive }) =>
                    `text-[11px] font-bold transition-all hover:text-[#B30000] uppercase tracking-[0.2em] relative group ${
                      isActive || location.pathname === link.to
                        ? "text-[#F3F3F3]"
                        : "text-[#888]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute -bottom-2 left-0 w-full h-px bg-[#B30000] transition-transform origin-left ${
                          isActive || location.pathname === link.to
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden lg:flex">
            <Link
              to={appRoutes.planVisit}
              className="border border-[#333] px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#F3F3F3] hover:bg-[#F3F3F3] hover:text-[#0A0A0A] transition-colors"
            >
              Plan a Visit
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-[#F3F3F3]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full"
          >
            <div className="px-6 pt-6 space-y-6 flex flex-col">
              {primaryNavigationItems.map((link, i) => {
                const to = link.hash ? `${link.to}${link.hash}` : link.to;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left text-3xl font-black text-[#F3F3F3] hover:text-[#B30000] uppercase tracking-tighter transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to={appRoutes.planVisit}
                  onClick={() => setIsOpen(false)}
                  className="mt-8 w-full border border-[#333] py-5 text-[11px] uppercase tracking-[0.2em] font-bold text-[#F3F3F3] bg-[#111] block text-center"
                >
                  Plan a Visit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
