import React, { useEffect, useState, useRef } from "react";

import { Link } from "gatsby";
import { gsap, Power3 } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/sections.sass";
import "../sass/cards.sass";

import { Container } from "reactstrap";

const TopPosts = ({ data }) => {
  const [characterNum, setCNUM] = useState(200);

  let blogCards = [];
  const setBlogCards = (ref) => {
    blogCards.push(ref);
  };

  useEffect(() => {
    let theWindow = window !== undefined ? window : null;
    setCNUM(theWindow.innerWidth < 768 ? 80 : 50);
    theWindow.onresize = () => setCNUM(theWindow.innerWidth < 768 ? 80 : 50);

    blogCards.forEach((blogCard) => {
      gsap.from(blogCard, 3, {
        autoAlpha: "0",
        delay: "1.5",
        ease: Power3.easeOut,
        y: 100,
      });
    });
  }, []);

  const max = 3;

  return (
    <Container>
      <Container style={{ width: "100%" }}>
        <div className="header">Top Posts</div>
        <div className="underline"></div>
        <div className="scroll-cards">
          {data.edges
            .filter((e) => e.node.frontmatter.templateKey === "blog-post")
            .map((e) => (
              <div
                className="scroll-card"
                ref={(el) => {
                  setBlogCards(el);
                }}
              >
                <Link
                  to={e.node.fields.slug}
                  className="scroll-card-img-holder"
                >
                  <div className="scroll-card-img">
                    <img
                      width="100%"
                      src={
                        e.node.frontmatter.featuredimage != null
                          ? "/img/" +
                            e.node.frontmatter.featuredimage.relativePath
                          : "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
                      }
                      alt={e.node.frontmatter.title}
                      className="topPostImg"
                    />
                  </div>
                </Link>
                <div className="scroll-card-content">
                  <h5>
                    <Link to={e.node.fields.slug}>
                      {e.node.frontmatter.title}
                    </Link>
                  </h5>

                  {/* Badges for tags */}
                  <div class="tags">
                    {e.node.frontmatter.tags.map((tag, index) => {
                      if (index < max) {
                        return (
                          <span
                            className="badge badge-pill badge-success mr-2"
                            style={{ fontSize: "1em" }}
                          >
                            {tag}
                          </span>
                        );
                      } else {
                        return <span></span>;
                      }
                    })}
                  </div>

                  {/* Description */}
                  <p className="mt-2">
                    {e.node.frontmatter.description.substring(0, characterNum) +
                      "..."}
                  </p>

                  <p className="text-success scroll-card-author">
                    {e.node.frontmatter.author}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <hr />
      </Container>
    </Container>
  );
};

export default TopPosts;
