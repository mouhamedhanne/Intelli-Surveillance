import React from "react";
import "../styles/components/whyChooseUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  return (
    <div className="l-choose">
      <div className="choose_item">
        <h2>
          Pourquoi Nous
          <br /> Choisir
        </h2>
        <p style={{ lineHeight: "24px" }}>
          Sécurisez votre établissement avec nos offres <br /> à faible coût,
          bénéficiez d'une support <br /> technique 24x7. En plus de
          l'installation nous <br /> fournissons également des services complet
          <br /> de maintenace. Nous effectuons des contrôles <br /> réguliers,
          aini que des réparations en cas de <br />
          besoin.
        </p>
      </div>
      <div className="choose_card">
        <div style={{ textAlign: "center" }} className="Choose_card_row1">
          <FontAwesomeIcon
            style={{ color: "#0089E4", fontSize: "40px" }}
            icon={faShieldAlt}
          />
          <h3 style={{ color: "#fff", lineHeight: "30.6px" }}>Sécurité</h3>
          <p style={{ color: "#fff", lineHeight: "24px" }}>
            La vidéosurveillance
            <br /> joue un rôle clé dans la
            <br /> prévention et la
            <br />
            dissuation des
            <br /> incidents indésirables
            <br /> en milieu scolaire.
          </p>
          <button>
            Savoir Plus <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </div>
        <div style={{ textAlign: "center" }} className="Choose_card_row2">
          <FontAwesomeIcon
            style={{ color: "#0089E4", fontSize: "40px" }}
            icon={faHeadset}
          />
          <h3 style={{ color: "#fff", lineHeight: "30.6px" }}>24x7 Support</h3>
          <p style={{ color: "#fff", lineHeight: "24px" }}>
            Bénéficiez d'un support
            <br /> pour des services de
            <br /> maintenance et pour
            <br />
            garantir le bon
            <br /> fonctionnement des
            <br /> équipents installés.
          </p>
          <button>
            Savoir Plus <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </div>
        <div style={{ textAlign: "center" }} className="Choose_card_row3">
          <FontAwesomeIcon
            style={{ color: "#0089E4", fontSize: "40px" }}
            icon={faMoneyBillWave}
          />
          <h3 style={{ color: "#fff", lineHeight: "30.6px" }}>Faible Coût</h3>
          <p style={{ color: "#fff", lineHeight: "24px" }}>
            Nos packs d'installation
            <br /> de vidéosurveillance
            <br /> sont conçus pour
            <br />
            repondre aux besoins
            <br /> specifique de chaque
            <br /> etablissement.
          </p>
          <button>
            Savoir Plus <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
