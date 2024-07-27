import { IBullet } from '../../../../types';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../../../shadcn-ui';

interface IFqAccordion {
  faqs: IBullet[];
}

const FaqAccordion = ({ faqs }: IFqAccordion) => {
  return (
    <Accordion type="single">
      {faqs.map((faq, index) => (
        <AccordionItem value={index.toString()} key={index}>
          <AccordionTrigger className='font-semibold'>{faq.heading}</AccordionTrigger>
          <AccordionContent>{faq.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
