import React from "react";
import "../styles/components/contactUs.css";

const ContactUs = () => {
  return (
    <div className="l-contactUs">
      <div className="contactUs">
        <h2>Demandez Un Devis Maintenant</h2>
        <div className="contactUs_container">
          <div className="contactUs_infos">
            <h2 style={{ borderBottom: "1px solid #fff" }}>Contactez Nous</h2>
            <h3 style={{ marginTop: "2rem" }}>Localisation :</h3>
            <p style={{ marginTop: "2rem" }}>Dakar, Sénégal</p>
            <h3 style={{ marginTop: "3rem" }}>Email :</h3>
            <p style={{ marginTop: "2rem" }}>
              intellisurveillanceoff@gmail.com
            </p>
            <h3 style={{ marginTop: "3rem" }}>Téléphone :</h3>
            <p style={{ marginTop: "2rem" }}>+221 709477930</p>
          </div>
          <div className="contactUs_message">
            <div className="contactUs_row1">
              <input
                style={{
                  marginBottom: "2rem",
                  padding: "17px 3rem",
                  border: "none",
                }}
                type="text"
                placeholder="Nom Complet"
              />
              <input
                style={{
                  padding: "17px 3rem",
                  marginLeft: "1rem",
                  border: "none",
                }}
                type="email"
                placeholder="Votre Email"
              />
            </div>
            <div className="contactUs_row2">
              <input
                style={{ padding: "17px 0", border: "none" }}
                type="number"
                placeholder="Numéros de Téléphone"
              />
              <input
                style={{ padding: "17px 0", border: "none" }}
                type="text"
                placeholder="Sujet"
              />

              <textarea
                style={{ border: "none" }}
                placeholder="Votre Message"
                name=""
                id=""
                cols="30"
                rows="7"
              ></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
