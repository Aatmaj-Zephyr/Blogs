import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { CardTitle } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="allPosts">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              style={{
                height: "auto",
                margin: "2%",
                backgroundColor: "white",
                boxShadow: "0px 7px 15px #b1b1b1",
                position: "relative",
                borderRadius: "2%",
              }}
              key={post.id}
            >
              <div>
                {post.frontmatter.featuredimage ? (
                  <div style={{ border: "none" }}>
                    <img
                      src={
                        post.frontmatter.featuredimage != null
                          ? "/img/" +
                            post.frontmatter.featuredimage.relativePath
                          : "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
                      }
                      alt={post.frontmatter.title}
                      style={{
                        width: "100%",
                        borderTopLeftRadius: "2%",
                        borderTopRightRadius: "2%",
                      }}
                    />
                  </div>
                ) : null}
                <CardTitle style={{ padding: "5%", fontSize: "1.4em" }}>
                  <Link className="title" to={post.fields.slug}>
                    <span
                      style={{
                        color: "#242424",
                      }}
                      className="hover-underline"
                    >
                      {post.frontmatter.title}
                    </span>
                  </Link>
                  <span className="d-block mt-1 text-muted">
                    {post.frontmatter.date}
                  </span>
                </CardTitle>
              </div>
              <p className="px-4 text-justify" style={{ marginBottom: "60px" }}>
                {post.excerpt.charAt(0).toUpperCase() +
                  post.excerpt.substring(1, 150)}
                ...
                <br />
                <br />
              </p>
              <p
                className="px-4 pb-2"
                style={{
                  position: "absolute",
                  bottom: "0px",
                  marginTop: "40px",
                }}
              >
                <Link
                  className="btn btn-primary text-white"
                  to={post.fields.slug}
                >
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  relativePath
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
