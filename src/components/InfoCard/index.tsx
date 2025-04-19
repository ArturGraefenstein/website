// InfoCard.tsx
import type { ReactNode } from "react";
import { infoCardStyles, infoIconStyles, infoValueStyles } from "./InfoCard.styles";

interface InfoCardProps {
  icon: ReactNode;
  value: string;
}

const InfoCard = ({ icon, value }: InfoCardProps) => (
  <div className={infoCardStyles()}>
    <span className={infoIconStyles()}>
      {icon}
    </span>
    <span className={infoValueStyles()}>
      {value}
    </span>
  </div>
);

export default InfoCard;
