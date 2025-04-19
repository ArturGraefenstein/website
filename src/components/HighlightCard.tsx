import {
  highlightCardStyles,
  highlightValueStyles,
  highlightLabelStyles,
} from "./HighlightCard.styles";

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
  <div className={highlightCardStyles()}>
    <span className={highlightValueStyles()}>{value}</span>
    <div className="flex flex-col justify-center">
      <span className={highlightLabelStyles()}>{labelTop}</span>
      <span className={highlightLabelStyles()}>{labelBottom}</span>
    </div>
  </div>
);

export default HighlightCard;
