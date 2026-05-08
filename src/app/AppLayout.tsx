import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SiteFooter, SiteHeader } from "../shared";
import { PageTransition } from "../shared/motion/PageTransition";

export function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans selection:bg-[#B30000] selection:text-white">
      <SiteHeader />
      <main>
        <PageTransition transitionKey={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  );
}
