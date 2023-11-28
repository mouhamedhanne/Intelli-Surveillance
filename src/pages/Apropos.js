import React from "react";
import Navigation from "../components/Navigation";
import "../styles/pages/apropos.css";
import BannerApropos from "../assets/banner_apropos.jpg";

const backgroundApropos = {
  container: {
    backgroundImage: `url(${BannerApropos})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "35vh",
    filter: "brightness(40%)",
  },
};

const Apropos = () => {
  return (
    <div>
      <Navigation />
      <div className="l-apropos">
        <div className="banner_apropos">
          <h1
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "5rem",
              paddingBottom: "5rem",
              fontSize: "48px",
              lineHeight: "62.4px",
              position: "relative",
              zIndex: "2",
            }}
          >
            Qui Sommes Nous
          </h1>
        </div>
        <div
          className="image_fond_apropos"
          style={backgroundApropos.container}
        ></div>
      </div>

      <div className="compagnie_profil">
        <h2>Profile De La Compagnie</h2>
        <p>
          IntelliSurveillance est une startup spécialisée dans la sécurisation
          des établissements scolaires au Sénégal grâce à des solutions de
          <br />
          vidéosurveillance avancées. Forts de notre expertise en technologie,
          nous nous sommes engagés à offrir des services de qualité et
          <br /> des solutions de sécurité innovantes aux clients de tous les
          niveaux éducatifs, des écoles maternelles aux universités pour créer
          un
          <br /> environnements d'apprentissage sécurisé et serein pour tous.
        </p>
      </div>
      <div className="team_profil">
        <div className="team_row">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="boite_profil"></div>
      </div>
    </div>
  );
};

export default Apropos;
