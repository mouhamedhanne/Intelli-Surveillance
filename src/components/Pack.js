import React from "react";
import DataPack from "./DataPack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Pack = (name_pack) => {
  return (
    <div className="l-pack">
      <ul className="pack_item">
        {DataPack.map((data, id) => (
          <div className="card_pack">
            <h2 key={id}>
              {data.name_pack.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <hr className="separateur" />
            <p style={{ fontSize: "28px", color: "#999999" }} key={id}>
              {data.prix_pack.toLocaleString()}
              <span style={{ fontWeight: 700 }}> FCFA</span>
            </p>
            <hr className="separateur" />
            <p style={{ fontSize: "14px" }} key={id}>
              <FontAwesomeIcon
                style={{
                  color: "#00C853",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
                icon={faCheck}
              />
              {data.number_camera} Caméras
            </p>
            <hr className="separateur" />
            <p style={{ fontSize: "14px" }} key={id}>
              <FontAwesomeIcon
                style={{
                  color: "#00C853",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
              />
              {data.equipement}
            </p>
            <hr className="separateur" />
            <p style={{ fontSize: "14px" }} key={id}>
              <FontAwesomeIcon
                style={{
                  color: "#00C853",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
                icon={faCheck}
              />
              {data.disque}
            </p>
            <hr className="separateur" />
            <p style={{ fontSize: "14px" }} key={id}>
              <FontAwesomeIcon
                style={{
                  color: "#00C853",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
                icon={faCheck}
              />
              {data.agree}
            </p>
            <hr className="separateur" />
            <p style={{ fontSize: "14px" }} key={id}>
              <FontAwesomeIcon
                style={{
                  color: "#00C853",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
                icon={faCheck}
              />
              {data.support}
            </p>
            <hr className="separateur" />
            <p style={{ fontSize: "14px" }} key={id}>
              <FontAwesomeIcon
                style={{
                  color: "#00C853",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
                icon={faCheck}
              />
              {data.payment}
            </p>
            <button>Choisir</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pack;
