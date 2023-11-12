import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ScreenCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div style={{ color: "#fff" }} className="full-carousel">
      <h2> Single Item</h2>
      <Slider
        style={{
          marginTop: "2rem",
          border: "1px solid ",
          padding: "2rem 0px",
        }}
        {...settings}
      >
        <div>
          <h2 style={{ textAlign: "center" }}>
            Découvrez IntelliSurveillance : Votre partenaire en sécurité
            scolaire
            <br />
            <p>
              Chez IntelliSurveillance, la sécurité scolaire est notre passion.
              Notre mission est simple : assurer une protection et une
              surveillance efficace des établissements scolaires. Créons
              ensemble un environnement sécurisé pour favoriser une éducation de
              qualité.
            </p>
          </h2>
        </div>
        <div>
          <h2>
            Nos Engagements envers Vous
            <br />
            Pourquoi choisir IntelliSurveillance ? Parce que nous nous engageons
            à sécuriser votre établissement tout en maîtrisant les coûts. Notre
            support technique est disponible 24/7, et nos solutions incluent
            l'installation, la maintenance, et bien plus encore.
          </h2>
        </div>
        <div>
          <h2>
            La Vidéosurveillance au Service de la Sécurité
            <br />
            La vidéosurveillance joue un rôle essentiel dans la dissuasion des
            incidents indésirables en milieu scolaire. Nos caméras assurent la
            tranquillité d'esprit pour les élèves, le personnel et les
            visiteurs.
          </h2>
        </div>
        <div>
          <h2>
            Des Solutions Personnalisées
            <br />
            Chaque établissement est unique. C'est pourquoi nous concevons des
            solutions sur mesure adaptées à vos besoins, votre infrastructure et
            vos exigences spécifiques. Nous collaborons étroitement avec vous
            pour créer le système idéal.
          </h2>
        </div>
        <div>
          <h2>
            Des Fonctionnalités Avancées pour Plus de Sécurité
            <br />
            Au-delà des fonctionnalités de base, nous offrons des options
            avancées comme la détection de mouvement, l'accès distant aux flux
            vidéo et l'intégration avec d'autres systèmes de sécurité pour
            renforcer votre protection.
          </h2>
        </div>
        <div>
          <h2>
            Notre Vision, Vos Besoins
            <br />
            Notre vision est de devenir le leader incontesté de la sécurité des
            établissements scolaires au Sénégal. Nous nous engageons à
            promouvoir la sécurité et le bien-être des élèves et du personnel
            enseignant. Vos besoins sont au cœur de nos actions. Faites le choix
            de la sécurité avec IntelliSurveillance.
          </h2>
        </div>
      </Slider>
    </div>
  );
};

export default ScreenCarousel;
