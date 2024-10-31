import React, { useState } from "react";
import Accordion from "./Accordion";
/* we have three accordions in this case (add more if needed)
the questions and answers are gibberish so they need to be changed 
*/

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="p-4 rounded-lg">
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
        title="How can I determine if a language is covered?"
        answer="Language coverage varies by product. For instance, Gboard has a Help Center page that lists the supported languages, and so does Translate. While we work to provide an aggregated view of languages covered across all products, please visit product-specific help center pages for more information on language coverage."
        isOpen={openIndex === 1} 
        onClick={() => handleAccordionClick(1)} 
      />
      <Accordion
        title="What products will these languages launch in?"
        answer="Coverage varies by product. Growing language support can already be utilized in many Google products, from YouTube captions to Gboard, to searching with your voice. And as we introduce expanded language coverage in models like Gemini, many products across Google will see increased language-related capabilities as a result."
        isOpen={openIndex === 2} 
        onClick={() => handleAccordionClick(2)} 
      />
    </div>
  );
};

export default FAQ;
