import type { CSSProperties } from "react";

type MarqueeBandProps = {
  text: string;
  direction?: "left" | "right";
  speed?: number;
  accentColor?: string;
  className?: string;
  textClassName?: string;
};

export function MarqueeBand({
  text,
  direction = "left",
  speed = 52,
  accentColor = "#B30000",
  className,
  textClassName,
}: MarqueeBandProps) {
  const style = {
    "--marquee-duration": `${speed}s`,
    "--marquee-direction": direction === "right" ? "reverse" : "normal",
    "--marquee-accent": accentColor,
  } as CSSProperties;

  return (
    <div className={`marquee-band ${className ?? ""}`.trim()} style={style}>
      <div className="marquee-accent" />
      <div className="marquee-track" aria-hidden="true">
        <div className="marquee-group">
          <span className={`marquee-text ${textClassName ?? ""}`.trim()}>
            {text}
          </span>
        </div>
        <div className="marquee-group" aria-hidden="true">
          <span className={`marquee-text ${textClassName ?? ""}`.trim()}>
            {text}
          </span>
        </div>
      </div>
      <span className="sr-only">{text}</span>
    </div>
  );
}
