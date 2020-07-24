import React, { Fragment } from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/cards.sass";

import { CardImg } from "reactstrap";

const Categories = () => {
  return (
    <Fragment>
      <div className="categoryHeader">Categories</div>
      <div className="underline"></div>
      <div className="categories">
        <div className="category">
          <Link to="/">
            <div className="overlay">ML</div>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
              className="categoryImg"
            ></CardImg>
          </Link>
        </div>
        <div className="category">
          <Link to="/">
            <div className="overlay">IOT</div>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
              className="categoryImg"
            ></CardImg>
          </Link>
        </div>
        <div className="category">
          <Link to="/">
            <div className="overlay">AR/VR</div>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
              className="categoryImg"
            ></CardImg>
          </Link>
        </div>
        <div className="category">
          <Link to="/">
            <div className="overlay">WEBDEV</div>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
              className="categoryImg"
            ></CardImg>
          </Link>
        </div>
        <div className="category">
          <Link to="/">
            <div className="overlay">HACKING</div>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
              className="categoryImg"
            ></CardImg>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
