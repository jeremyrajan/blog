/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Header from "./Header";

import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <Header title={data.datoCmsSite.globalSeo.siteName} />
          <div className={`container ${showMenu ? "is-open" : ""}`}>
            <HelmetDatoCms
              favicon={data.datoCmsSite.faviconMetaTags}
              seo={data.datoCmsHome.seoMetaTags}
            />

            <div className="container__sidebar">
              <img className="container__sidebar__image"  src="https://res.cloudinary.com/jeremyrajan/image/upload/v1588657226/jeremyrajan.png" />
              <div className="sidebar">
                <div
                  className="sidebar__intro subtitle is-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsHome.introTextNode.childMarkdownRemark.html,
                  }}
                />
                <p className="sidebar__social">
                  {data.allDatoCmsSocialProfile.edges.map(
                    ({ node: profile }) => (
                      <a
                        key={profile.profileType}
                        href={profile.url}
                        target="blank"
                        className={`social social--${profile.profileType.toLowerCase()}`}
                      >
                        {" "}
                      </a>
                    )
                  )}
                </p>
                <div className="sidebar__copyright">
                  {data.datoCmsHome.copyright}
                </div>
              </div>
            </div>
            <div className="container__body">{children}</div>
          </div>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
