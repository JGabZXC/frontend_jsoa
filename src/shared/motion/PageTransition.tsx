import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  transitionKey: string;
}

export function PageTransition({
  children,
  transitionKey,
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className="min-h-full">{children}</div>;
  }

  return (
    <motion.div
      key={transitionKey}
      initial={{ clipPath: "inset(0 0 6% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-full"
      style={{ willChange: "clip-path" }}
    >
      {children}
    </motion.div>
  );
}
