import React from "react";

const image =
  "https://github.com/academind/react-complete-guide-code/blob/08-practice-project/code/project-1/01-starting-project/src/assets/investment-calculator-logo.png?raw=true";

const Header = () => {
  return (
    <header className="header">
      <img src={image} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
