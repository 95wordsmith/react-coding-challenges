import Accordion from "./ui/accordion";

import { AccordionItem, AccordionToggle, AccordionPanel   } from "./ui/accordion";
const CompoundComp = () => {
  return (
    <div className=" my-14">
      <Accordion defaultActivePanel ='1' collapsible>
        <AccordionItem id='1'>
          <AccordionToggle>Section 1</AccordionToggle>
          <AccordionPanel>Section 1 content</AccordionPanel>
        </AccordionItem>
        <AccordionItem id='2'>
          <AccordionToggle>Section 2</AccordionToggle>
          <AccordionPanel>Section 2 content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CompoundComp;
