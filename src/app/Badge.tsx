"use client";

import CountUp from "react-countup";

interface BadgeProps {
  containerStyles: string;
  icon: React.ReactNode;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
  countUpStyles?: string;
  badgeTextStyles?: string;
}

export default function Badge({
  containerStyles,
  icon,
  endCountNum,
  countUpStyles,
  endCountText,
  badgeTextStyles,
  badgeText,
}: BadgeProps) {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp
            end={endCountNum}
            delay={1}
            duration={4}
            className={countUpStyles}
          />
          {endCountText}
        </div>
        <div
          className={`max-w-[70px] leading-none text-[15px] font-medium text-black text-center`}
        >
          <span className={badgeTextStyles}>{badgeText}</span>
        </div>
      </div>
    </div>
  );
}
