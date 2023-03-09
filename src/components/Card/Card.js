import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div id={props.carRecord.Tittle + "Container"} className="Parent">
      <div id={props.carRecord.Tittle + "InnerContainer"}>
        <div>
          <img src={props.carRecord.Icon} alt="Car Logo" />
        </div>

        <div className="TittleHeader">{props.carRecord.Tittle}</div>

        <div>
          <p className="DescreptionParagraph">
            {props.carRecord.CarDescription}
          </p>
        </div>
        <div>
          <button id={props.carRecord.Tittle + "Btn"} className="CardBtn">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
