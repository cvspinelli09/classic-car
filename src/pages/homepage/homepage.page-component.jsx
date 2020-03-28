import React from "react";

import Panel from "../../components/panel/panel.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <h4 className="line">
      In order to get access to Classics Cars Price Guide, 
      please log in. <br/>
    
      You can access it by using your Google account or 
      register email and password.</h4>
    <Panel />
  </div>
);

export default HomePage;
