import { IBullet } from '../../../types';

interface ICardGridProps {
  cards?: IBullet[];
}

export const CardGrid = ({ cards }: ICardGridProps) => {
  if (!cards) return null;
  return (
    <div>
      {cards.map((card, index) => (
        <div>ping</div>
      ))}
    </div>
  );
};

export default CardGrid;
