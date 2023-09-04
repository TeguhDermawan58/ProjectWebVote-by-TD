import React from "react";
import colour from "../../theme";
import "./candidate.css";
import Candidateimg from "./candidateimg";
import Card from "../../components/cards/card";
import Footer from "../../components/footer/footer";

function Candidatelist() {
 const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <div>
      {isAuthenticated && (

        <div className="basic-kandidat">
          <Candidateimg />
            <div className="heading-div">
              <div className="candtext1">
                <h1 className="h1c" style={{ color: colour.text2 }}>
                  Ayo Pilih
                </h1>
                <div className="subtitle1">
                  <h3 className="h3c" style={{ color: colour.text2 }}>
                    Kandidat untuk negri masa depan
                  </h3>
                </div>
                <p className="p1" style={{ color: colour.text2 }}>
                  Mari Tetapkan Luber dan jurdil (langsung, umum, bebas,
                  rahasia, jujur, dan adil.)
                </p>
              </div>
            </div>
          
       <Card/>
       
      <Footer className="maincandidate"/>
        </div>
       )} 
       {!isAuthenticated && <p>Please log in to view this content.</p>} 
    </div>
  );
}

export default Candidatelist;
