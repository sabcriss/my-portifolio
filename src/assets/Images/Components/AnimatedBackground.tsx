import React from "react"; // Importando o React
import "./animated.css"; // Importando o CSS

const AnimatedBackground = () => {
  return (
    <div className="background">
      <div className="parallelogram" id="one"></div>
      <div className="parallelogram" id="two"></div>
      <div className="parallelogram" id="three"></div>
    </div>
  );
};

export default AnimatedBackground;