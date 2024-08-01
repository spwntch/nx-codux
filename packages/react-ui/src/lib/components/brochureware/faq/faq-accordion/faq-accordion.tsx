import { BulletsWithClassName, IBullet } from '../../../../types';
import { getBulletsContentAndClassName } from '../../../../utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../shadcn-ui';

interface IFqAccordion {
  faqs: IBullet[] | BulletsWithClassName;
}

const FaqAccordion = ({ faqs }: IFqAccordion) => {
  const { bulletsContent } = getBulletsContentAndClassName(faqs);
  return (
    <Accordion type="single">
      {bulletsContent.map((faq, index) => (
        <AccordionItem value={index.toString()} key={index}>
          <AccordionTrigger className="font-semibold">
            {faq.heading}
          </AccordionTrigger>
          <AccordionContent>
            {faq.body.map((paragraph, index) => (
              <p key={index} className="pb-3">
                {paragraph}
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
