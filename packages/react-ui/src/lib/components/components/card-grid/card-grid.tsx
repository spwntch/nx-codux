import { IBullet } from '../../../types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../shadcn-ui';

interface ICardGridProps {
  cards?: IBullet[];
}

export const CardGrid = ({ cards }: ICardGridProps) => {
  if (!cards) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ">
      {cards.map((card, index) => (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{card.heading}</CardTitle>
            <CardDescription>{card.subheading}</CardDescription>
          </CardHeader>
          <CardContent>
            {card.body.map((paragraph, pIndex) => (
              <p className='mb-6'>{paragraph}</p>
            ))}
            {card.body}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
