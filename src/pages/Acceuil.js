import React from "react";
import Navigation from "../components/Navigation";
import Pack from "../components/Pack";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";
import "../styles/pages/acceuil.css";
import Imgcarr from "../assets/central.jpg";
import ImgSecondary from "../assets/central_secondary.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Faq from "../components/Faq";

const backgroundAcceuil = {
  container: {
    backgroundImage: `url(${Imgcarr})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
  },
};

const Acceuil = () => {
  function handleClick() {
    var confirmation = prompt("Entrez votre adresse email");
    if (confirmation === null) {
      return;
    }
    if (confirmation === "") {
      alert("Veuillez entrer votre adresse email");
    } else if (confirmation.indexOf("@") === -1) {
      alert("Veuillez entrer une adresse email valide");
    } else {
      alert(
        "Merci pour votre demande. Nous vous contacterons dans les plus brefs delais"
      );
    }
  }
  return (
    <div>
      <Navigation />
      <div className="l-acceuil" style={backgroundAcceuil.container}>
        <div>
          <div style={{ textAlign: "center" }} className="container">
            <div className="block_description">
              <h1>
                La sécurité Scolaire Est La Base
                <br /> d'une éducation Prospére
              </h1>
              <p>
                Startup d'aide aux établissements scolaire sur l'installation de
                vidéosurveillances
              </p>
              <button onClick={handleClick}>
                Demander Un Devis
                <FontAwesomeIcon
                  style={{ marginLeft: "3px" }}
                  icon={faAngleDoubleRight}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="secondary_item">
        <h1 className="secondary_item_title">Qualité Sécurité Efficacité</h1>
        <p className="secondary_item_desc">
          Notre mission est de fournir des solutions de sécurité avancées pour
          assurer la protection et la
          <br /> surveillances efficace des établissements scolaire
        </p>

        <div className="divider"></div>

        <div className="box_secondary">
          <div className="img_box">
            <img src={ImgSecondary} alt="image_description" />
          </div>
          <div className="description_box">
            <h3>
              Un Environnement Sécurisé Pour Assurer
              <br /> Une Meilleure Education
            </h3>
            <p>
              Nous comprenons l'importance de la sécurité dans
              <br /> les environnements éducatif et nous nous
              <br /> engageons à aider les écoles à créer des espaces
              <br /> sûrs :
            </p>
            <ul>
              <li>
                <FontAwesomeIcon
                  style={{
                    marginRight: "5px",
                    color: "blue",
                  }}
                  icon={faAngleDoubleRight}
                />
                Pour les éléves
              </li>
              <li>
                <FontAwesomeIcon
                  style={{
                    marginRight: "5px",
                    color: "blue",
                  }}
                  icon={faAngleDoubleRight}
                />
                Le personnel enseignant
              </li>
              <li>
                <FontAwesomeIcon
                  style={{
                    marginRight: "5px",
                    color: "blue",
                  }}
                  icon={faAngleDoubleRight}
                />
                Et les visiteurs
              </li>
            </ul>
            <button>
              Réservez Maintenant
              <FontAwesomeIcon
                style={{ marginLeft: "3px" }}
                icon={faAngleDoubleRight}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="pack_container">
        <Pack />
      </div>
      <div className="we_choose">
        <WhyChooseUs />
      </div>
      <div className="faq">
        <Faq />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Acceuil;
