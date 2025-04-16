// HighlightCard.tsx
interface HighlightCardProps {
  value: string;
  labelTop: string;
  labelBottom: string;
}

const HighlightCard = ({
  value,
  labelTop,
  labelBottom,
}: HighlightCardProps) => (
  <div className="flex flex-row items-center gap-4 bg-[#1A1E23] rounded-[80px] shadow-[2px_2px_4px_0_rgba(0,0,0,0.25)] px-8 py-6">
    <span className="text-4xl font-mono font-medium text-[#12F7D6]">
      {value}
    </span>
    <div className="flex flex-col justify-center">
      <span className="text-sm font-mono text-white leading-tight">
        {labelTop}
      </span>
      <span className="text-sm font-mono text-white leading-tight">
        {labelBottom}
      </span>
    </div>
  </div>
);

export default HighlightCard;
