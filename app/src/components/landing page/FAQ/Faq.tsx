// import React, { useState } from "react";
// import "./faq.css";
// import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

// interface FAQ {
//   question: string;
//   answer: string;
// }

// const Faq: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const faqs: FAQ[] = [
//     {
//       question: "What is cryptocurrency?",
//       answer: "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates independently of a central authority, like a bank.",
//     },
//     {
//       question: "How do I create an account?",
//       answer: "Creating an account is easy! Simply click on the 'Sign Up' button, fill in your details, and verify your email address.",
//     },
//     {
//       question: "How can I contact customer support?",
//       answer: "You can reach our customer support team 24/7 through the 'Contact Us' section on our website or via email at support@example.com.",
//     },
//     {
//       question: "How can I track prices of cryptocurrencies?",
//       answer: "You can visit the 'Market Trends Today' section on our platform to track real-time prices and trends of cryptocurrencies.",
//     },
//     {
//       question: "Can I download my transaction history?",
//       answer: "Yes, you can easily download your transaction history from the 'Account Settings' page in the 'Transaction History' section.",
//     },
//   ];

//   const handleClick = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-container">
//       <h2 className="faq-heading">FAQ<span className="apostrophe">'</span>S</h2>
//       <div className="faq-list">
//         {faqs.map((faq, index) => (
//           <div key={index} className="faq-item">
//             <div className="faq-question" onClick={() => handleClick(index)}>
//               <span>{faq.question}</span>
//               <ArrowDropDownRoundedIcon
//                 className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
//               />
//             </div>
//             {activeIndex === index && (
//               <div className="faq-answer">{faq.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;

import React, { useState } from "react";
import "./faq.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useTranslation } from "react-i18next";

// Interface defining the structure of each FAQ item
interface FAQ {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  // State to track which FAQ item is currently active (expanded)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  // List of FAQs with questions and answers dynamically fetched using translations
  const faqs: FAQ[] = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ];

  // Handler for toggling the active state of an FAQ item
  const handleClick = (index: number) => {
     // If the clicked item is already active, collapse it; otherwise, expand it
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">{t("faq.title")}<span className="apostrophe">'</span>S</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            {/* FAQ question that toggles the answer on click */}
            <div className="faq-question" onClick={() => handleClick(index)}>
              <span>{faq.question}</span>
              {/* Icon with rotation animation based on active state */}
              <ArrowDropDownRoundedIcon
                className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>
            {/* FAQ answer that is conditionally rendered if the item is active */}
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
