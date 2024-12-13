import React, { useState } from "react";
import Accordion from "./Accordion";
import TitreSection from "../Titre-section/Titre-section";
/* we have three accordions in this case (add more if needed)
the questions and answers are gibberish so they need to be changed 
*/

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-10">
      <TitreSection
        h1={"On répond"}
        span={"à vos questions"}
        p={""}
        color={"#20B3AD"}
      />
      <div className="flex flex-col gap-6 p-4 rounded-lg text-left">
        <Accordion
          title="Comment puis-je rejoindre ETIC comment puis-je rejoindre ETIC ?"
          answer="The worlds linguistic diversity is stunning: with about 1,300 languages with 100K+ speakers, and thousands more with fewer speakers, our world boasts many more languages than most of us realize.

        Weve worked hard to gather the robust datasets and quality knowledge required to support the creation and use of everyday technology by speakers of diverse languages around the world. This has allowed us to support helping more of the worlds people to use the internet.
        
        But this means that billions of people still have a language barrier on the Internet. And when a language is not online, it limits what we can learn, what jobs we can have, what rights we exercise, and what stories we can tell. When a language is not online, opportunities are lost.
        
        This is why were working to organize the worlds information and make it universally accessible and useful across 1,000 languages—and ideally thousands more."
          isOpen={openIndex === 0} // Check if this accordion is open
          onClick={() => handleAccordionClick(0)} // Handle click event
        />
        <Accordion
          title="Comment puis-je rejoindre ETIC comment puis-je rejoindre ETIC ?"
          answer="The worlds linguistic diversity is stunning: with about 1,300 languages with 100K+ speakers, and thousands more with fewer speakers, our world boasts many more languages than most of us realize.

        Weve worked hard to gather the robust datasets and quality knowledge required to support the creation and use of everyday technology by speakers of diverse languages around the world. This has allowed us to support helping more of the worlds people to use the internet.
        
        But this means that billions of people still have a language barrier on the Internet. And when a language is not online, it limits what we can learn, what jobs we can have, what rights we exercise, and what stories we can tell. When a language is not online, opportunities are lost.
        
        This is why were working to organize the worlds information and make it universally accessible and useful across 1,000 languages—and ideally thousands more."
          isOpen={openIndex === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <Accordion
          title="Comment puis-je rejoindre ETIC comment puis-je rejoindre ETIC ?"
          answer="The worlds linguistic diversity is stunning: with about 1,300 languages with 100K+ speakers, and thousands more with fewer speakers, our world boasts many more languages than most of us realize.

        Weve worked hard to gather the robust datasets and quality knowledge required to support the creation and use of everyday technology by speakers of diverse languages around the world. This has allowed us to support helping more of the worlds people to use the internet.
        
        But this means that billions of people still have a language barrier on the Internet. And when a language is not online, it limits what we can learn, what jobs we can have, what rights we exercise, and what stories we can tell. When a language is not online, opportunities are lost.
        
        This is why were working to organize the worlds information and make it universally accessible and useful across 1,000 languages—and ideally thousands more."
          isOpen={openIndex === 2}
          onClick={() => handleAccordionClick(2)}
        />
      </div>
    </div>
  );
};

export default FAQ;
