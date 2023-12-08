import React from "react";
import "./accordion.css";
import { MdAdd } from "react-icons/md";
import { BiMinusCircle } from "react-icon/b1";

export default function Accordion() {
  return (
    <div className="accordion-box">
      <div className="ques-icon">
        <div className="icon">
          <MdAdd />
        </div>
        <div className="ques-answer">
          <h3>Questions</h3>
          <p>Reponse</p>
        </div>
      </div>
    </div>
  );
}
