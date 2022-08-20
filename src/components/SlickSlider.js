import React, { Fragment } from "react";
import Slider from "react-slick";
import { Link } from "gatsby";
import { CardImg } from "reactstrap";
import TagsYAML from "../admin-config/tagslist.yml";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/cards.sass";

const _ = require("lodash");

function SampleNextArrow() {
  return <div style={{ display: "none" }} />;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  swipeToSlide: true,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const SlickSlider = () => {
  // const data = useStaticQuery(graphql`
  //   query categorySliderQuery {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             tags
  //             templateKey
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // let tagsArray = [];
  // data.allMarkdownRemark.edges.forEach((edge) => {
  //   if (edge.node.frontmatter.templateKey === "blog-post")
  //     edge.node.frontmatter.tags.forEach((tag) => tagsArray.push(tag));
  // });

  // var finalTagsArray = _.uniq(tagsArray);

  var finalTagsArray = TagsYAML.tagslist;

  const renderFallbackImg = (e) => {
    // Will replace broken image
    e.target.src = "https://via.placeholder.com/200?text=.";
  };

  return (
    <Fragment>
      <div className="categoryHeader">Categories</div>
      <div className="underline"></div>
      <div className="slider-category">
        <div className="slider-equalizer">
          <Slider {...settings}>
            {finalTagsArray.map((tag) => (
              <div className="category">
                <Link to={"/categories/" + _.kebabCase(tag.name)}>
                  <div className="overlay">{_.startCase(tag.name)}</div>
                </Link>
                <CardImg
                  width="100%"
                  src={tag.icon}
                  alt={tag.name}
                  className="categoryImg"
                  onError={renderFallbackImg}
                ></CardImg>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default SlickSlider;
