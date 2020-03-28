import React from "react";
import { withRouter, NavLink } from 'react-router-dom';

import "./maker-item.styles.scss";

const MakerItem = ({ title, imgUrl, history, linkUrl, match }) => {

  return (
    <NavLink to={`/guide${linkUrl}`} >
      <div className="maker-item">
        <div
          className="background-logo"
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        />
        <div className="content-maker">
          <h1 className='title'>{title.toUpperCase()}</h1>
        </div>
      </div>
    </NavLink>
  );
}

export default withRouter(MakerItem);
