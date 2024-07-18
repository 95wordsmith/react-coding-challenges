import React, { useState } from "react";
import {
  AccordionContext,
  useAccordion,
  useAccordionItem,
  AccordionItemContext,
} from "./accordionContext";

export const AccordionToggle = ({ children }) => {
  const { handlePanelClick } = useAccordion();
  const { id } = useAccordionItem();
  return (
    <button
      style={{
        width: "100%",
        height: "30px",
        border: "1px solid #ebebeb",
        textAlign: "left",
        padding: "0px 20px",
        backgroundColor: "lightgrey",
      }}
      onClick={() => handlePanelClick(id)}
    >
      {children}
    </button>
  );
};

export const AccordionPanel = ({ children }) => {
  const { activePanel } = useAccordion();
  const { id } = useAccordionItem();

  if (id !== activePanel) return null;
  return (
    <div
      style={{
        border: "1px solid #ebebeb",
        textAlign: "left",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

export const AccordionItem = ({ id, children }) => {
  const value = {
    id,
  };

  return (
    <AccordionItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
};

const Accordion = ({ defaultActivePanel, children, collapsible }) => {
  const [activePanel, setActivePanel] = useState(defaultActivePanel);
  const value = {
    activePanel,
    handlePanelClick: (id) => {
      let nextActivePanelId = id;
      if (collapsible && nextActivePanelId === activePanel)
        nextActivePanelId = null;
      setActivePanel(nextActivePanelId);
    },
  };
  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};
export default Accordion;

// export const AccordionToggle = ({ id,children,handlePanelClick }) => {
//   return <button
//   style={{
//     width:'100%',
//     height:'30px',
//     border:'1px solid #ebebeb',
//     textAlign:'left',
//     padding:'0px 20px',
//     backgroundColor:'lightgrey'
//   }}
//   onClick={()=>handlePanelClick(id)}
//   >{children}</button>;
// };

// export const AccordionPanel = ({id, activePanel, children }) => {
//   if(id !==activePanel) return null
//   return (
//     <div
//       style={{
//         border: "1px solid #ebebeb",
//         textAlign: "left",
//         padding: "20px",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export const AccordionItem = ({
//   id,
//   children,
//   activePanel,
//   handlePanelClick,
// }) => {
//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           id,
//           handlePanelClick,
//           activePanel,
//         });
//       })}
//     </div>
//   );
// };

// const Accordion = ({ children }) => {
//   const [activePanel, setActivePanel] = useState(null);
//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           activePanel,
//           handlePanelClick: setActivePanel,
//         });
//       })}
//     </div>
//   );
// };
// export default Accordion;
