import React, { useState } from "react";
import "../styles/components/faq.css";
import Accordion from "./accordion/Accordion";
import Questions from "./accordion/Data";

export default function Faq() {
  const [data] = useState(Questions);
  return (
    <div className="l-faq">
      <div className="faq-section">
        <h2>Des Questions ?</h2>
        <p>
          Nous avons regroupé les questions les plus courantes posées par nos
          clients
          <br /> afin de vous offrir une expérience fluide. Si vous ne trouvez
          pas votre réponse, n'hésitez pas
          <br /> à nous contacter, notre équipe se fera un plaisir de vous
          aider.
        </p>
      </div>
      <div className="faq-acccordion-container">
        <div className="faq-accordion">
          {data.map((item) => {
            return (
              <Accordion
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
