import React, { useState } from "react";
import "./accordion.css";
import { MdAdd } from "react-icons/md";
import { BiMinusCircle } from "react-icons/bi";

export default function Accordion(props) {
  const [show, setShow] = useState(false);

  const styleIcon = {
    styles: {
      marginRight: "1rem",
      cursor: "pointer",
    },
  };

  const toggleAccordion = () => {
    setShow(!show);
  };
  return (
    <div className="accordion-box">
      <div className="ques-icon">
        <div className="icon">
          <p onClick={toggleAccordion}>
            {show ? (
              <BiMinusCircle style={styleIcon.styles} />
            ) : (
              <MdAdd style={styleIcon.styles} />
            )}
          </p>
        </div>
        <div className="ques-answer">
          <h3 onClick={toggleAccordion}>{props.question}</h3>
          {show && <p style={{ lineHeight: "24px" }}>{props.answer}</p>}
        </div>
      </div>
    </div>
  );
}
