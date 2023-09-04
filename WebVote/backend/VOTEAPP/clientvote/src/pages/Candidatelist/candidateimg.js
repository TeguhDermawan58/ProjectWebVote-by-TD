import React from "react";
import "../../components/Homes/Homes.css";
// import {Slide} from "react-awesome-reveal"
function Candidateimg (){

    return(
        <div>
            <img className="comp2"
            src={require(`../../assets/images/banner-dec-left.png`)}
            alt=""
            />
            
            <img className="comp1"
            src={require(`../../assets/images/banner-dec-right.png`)}
            alt=""
            />
            
            <img id="bannercand"
            src={require(`../../assets/images/Sura.png`)}
            alt=""
            />


     </div>
    )

} 
 
export default Candidateimg;
