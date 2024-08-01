import { BulletsWithClassName, IBullet } from '../../../types';
import { getBulletsContentAndClassName } from '../../../utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../shadcn-ui';

interface ICardGridProps {
  cards?: IBullet[] | BulletsWithClassName;
}

export const CardGrid = ({ cards }: ICardGridProps) => {
  if (!cards) return null;
  const { bulletsContent } = getBulletsContentAndClassName(cards);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ">
      {bulletsContent.map((card, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{card.heading}</CardTitle>
            <CardDescription>{card.subheading}</CardDescription>
          </CardHeader>
          <CardContent>
            {card.body.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-6">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
