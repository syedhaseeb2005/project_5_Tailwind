import React from "react";
import Navbar from "./Component/Navbar";
import AboutUs from "./Component/AboutUs";
import Ability from "./Component/Ability";
import Roadmap from "./Component/Roadmap";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutUs/>
      <Ability/>
      <Roadmap/>
    </div>
  );
};

export default App;
