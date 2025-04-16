// InfoCard.tsx
import type { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  value: string;
}

const InfoCard = ({ icon, value }: InfoCardProps) => (
  <div className="flex flex-row items-center gap-4">
    <span className="w-6 h-6 flex items-center justify-center text-[#12F7D6]">
      {icon}
    </span>
    <span className="text-white font-mono text-sm whitespace-nowrap">
      {value}
    </span>
  </div>
);

export default InfoCard;
