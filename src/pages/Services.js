import React from "react";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUs";
import "../styles/pages/services.css";
import BannerServices from "../assets/banner_service.jpg";
import service1 from "../assets/service_1.jpg";
import service2 from "../assets/service_2.jpg";
import service3 from "../assets/service_3.jpg";

const backgroundServices = {
  container: {
    backgroundImage: `url(${BannerServices})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "45vh",
    filter: "brightness(40%)",
  },
};

const Services = () => {
  return (
    <div>
      <Navigation />
      <div className="l-services">
        <div className="banner_services">
          <h1
            style={{
              color: "#fff",
              paddingTop: "10rem",
              paddingBottom: "3rem",
              textAlign: "center",
              fontSize: "48px",
              lineHeight: "62.4px",
              position: "relative",
              zIndex: "2",
            }}
          >
            Services
          </h1>
          <div
            className="image_fond_services"
            style={backgroundServices.container}
          ></div>
        </div>
        <div className="description_services">
          <h2
            style={{
              marginTop: "2rem",
              textAlign: "center",
              fontSize: "42px",
              lineHeight: "54.6px",
            }}
          >
            Ce Que Nous Faisons
          </h2>
          <p style={{ textAlign: "center", fontSize: "15px" }}>
            Nous mettons nos clients au centre de nos préocupations. Nous
            offrons un service client exeptionnel, en écoutant attentivement
            leurs besoins, en fournissant des conseilles et en asssurant un
            suivi continu pour garantir leur satisfaction. Nous sommes guidés
            par des les principes de l'intégrité et de l'éthique dans toutes nos
            actions. Nous agissons de maniére responsable, transparante et
            respectons les normes les plus strictes en matiére de
            confidentialité et de protection des données.
          </p>
        </div>
        <div className="type_services_container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "3rem",
            }}
            className="type_service_row1"
          >
            <div>
              <img src={service1} alt="" />
            </div>
            <div>
              <h3>
                Installation De Systémes De
                <br /> Surveillances
              </h3>
              <p>
                Nous proposons des pack d'installation de vidéosurveillance
                adaptées aux
                <br /> besoins spécifiques des écoles maternelles, des écoles
                élémentaires, des
                <br /> secondaires, des lycées, des universités et des grandes
                écoles. Notre équipe
                <br /> s'occupe de l'installation compléte du systéme, en
                veillant que chaque
                <br />
                caméra soit positionnée correctement pour assurer une couverture
                optimale
                <br /> de l'environnement scolaire.
              </p>
              <button>Réservez maintenant</button>
            </div>
          </div>
          <div className="hr"></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "3rem",
              marginTop: "6rem",
            }}
            className="type_service_row2"
          >
            <div>
              <h3>Personnalisation Des Solutions</h3>
              <p>
                Nous comprenons que chaque établissement scolaire a des besoins
                unique en
                <br /> matiére de sécurité. C'est pourquoi nous proposons des
                solutions de
                <br /> vidéosurveillance personnalisées. Notre équipe travaille
                en étroite collaboration
                <br /> avec les écoles pour concevoir des systémes sur mesure,
                adaptés à leurs
                <br />
                infratructures, leurs espaces et leurs exigences spécifiques.
              </p>
              <button>Réservez maintenant</button>
            </div>
            <div>
              <img src={service2} alt="" />
            </div>
          </div>
          <div className="hr"></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "8rem",
            }}
            className="type_service_row3"
          >
            <div
              style={{
                marginTop: "2rem",
              }}
            >
              <img src={service3} alt="" width="500px" />
            </div>
            <div>
              <h3>Fonctionnalités Avancées</h3>
              <p>
                En plus des fonctionnalités de base, nous proposons également
                <br />
                l'intégration de fonctionnalité avancé pour renforcer la
                sécurité
                <br /> des établissements scolaires. Cela peut inclure la
                détection de
                <br /> mouvement, l'accés à distance aux flux vidéos, ainsi que
                <br /> l'intégration avec d'autres systémes de sécurité
                existants.
              </p>
              <button>Réservez maintenant</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Services;
