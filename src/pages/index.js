import React from "react";
import { Helmet } from "react-helmet";
// import favicon16 from "../components/2025img/16.svg";
// import favicon32 from "../components/2025img/32.svg";
import favicon16 from "../components/2026img/favicon-16x16.png";
import favicon32 from "../components/2026img/favicon-32x32.png";
// favicon-32x32.png

import "../styles/fonts.css";
import Landing2026 from "./Hero.js";

const IndexPage = () => (
  <div>
    <Helmet>
      <title>ImpactCMU</title>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      
    </Helmet>
    <Landing2026 />
  </div>
);

export default IndexPage;
