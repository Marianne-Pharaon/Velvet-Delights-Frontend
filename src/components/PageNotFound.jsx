import React from "react";
import { Link } from "react-router-dom";
import '../style/PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="not-found-container">
    <div className="flex-title-not-found">
      <h1 className="title-text-not-found">Ooooooops!</h1>
      <p className="subTitle-not-found"> Page Not Found</p>
      <div className="home-button-not-found">
        <Link to="/HomePage" className="btn-not">Go to Home </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
