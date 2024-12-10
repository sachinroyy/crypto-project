// import React from "react";
import "./Cube.css"; // Include the CSS file
// import Bg1 from '../../assets/Bg1.jpeg'
// import Bg2 from '../../assets/Bg2.jpeg'
// import Bg3 from '../../assets/Bg3.jpeg'
// import Bg4 from '../../assets/Bg4.jpeg'
// import Bg5 from '../../assets/Bg5.jpeg'
// import Bg6 from '../../assets/Bg6.jpeg'


import Cube1 from '../../assets/cube-ai.jpeg'
import Cube2 from '../../assets/cube-airdrop.jpeg'
import Cube3 from '../../assets/cube-newcareer.png'
import Cube4 from '../../assets/cube-solana.jpeg'
import Cube5 from '../../assets/Cube-ethereum.jpeg'
import Cube6 from '../../assets/CubeNews.jpeg'

const RotatingCube = () => {
  return (
    <div className="cube-container">
      <div className="cube-face front">
        <img src={Cube1} alt="" />
      </div>
      <div className="cube-face back">
        <img src={Cube2} alt="" />
      </div>
      <div className="cube-face right">
        <img src={Cube3} alt="" />
      </div>
      <div className="cube-face left">
        <img src={Cube4} alt="" />
      </div>
      <div className="cube-face top">
        <img src={Cube5} alt="" />
      </div>
      <div className="cube-face bottom">
        <img src={Cube6} alt="" />
      </div>
    </div>
  );
};

export default RotatingCube;
