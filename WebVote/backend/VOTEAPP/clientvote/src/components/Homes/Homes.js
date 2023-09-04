import React from "react";
import "./Homes.css";
import colour from "../../theme";
import Homeimg from "./Homeimg";
import { useNavigate } from "react-router-dom";
import {Fade} from "react-awesome-reveal";


function Homes() {
  const navigate = useNavigate(); // navigatenya

  const handleNavigateToHome = () => {
    navigate("/registrasi"); // navigate ke form registrasi
  };

  return (
    <div>
      {/* Fade animation */}
        <Fade duration={3000}>
        <div className="homtext">
          <h1 style={{ color: colour.text2 }}>Selamat Datang</h1>
          <p style={{ color: colour.text2 }}>Marilah seluruh rakyat indonesia</p>
          <p style={{ color: colour.text2 }}>Diwajibkan bagi seluruh warga indonesia</p>
          <p style={{ color: colour.text2 }}>Mari Vote Kandidat terbaik anda</p>
          <div className="btn">
            <button className="button1" onClick={handleNavigateToHome}>
              Daftar Sekarang
            </button>
          </div>
        </div>
          </Fade>    
     
      

      {/* Fade-in animation */}

        <Homeimg />
  
    </div>
  );
}

export default Homes;
