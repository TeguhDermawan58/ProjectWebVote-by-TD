import React from "react";
import "./Homes.css";
// import { Slide } from "react-awesome-reveal";
function Homeimg (){

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
            <img id="bannerhome"
            src={require(`../../assets/images/banner.png`)}
            alt=""
            />


     </div>
    )

} 
 
export default Homeimg;
