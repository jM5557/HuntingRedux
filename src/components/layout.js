/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./partials/header";
import Footer from "./partials/footer";

import './../scss/main.scss';

class Layout extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    
    // const data = useStaticQuery(graphql`
    //   query SiteTitleQuery {
    //     site {
    //       siteMetadata {
    //         title
    //       }
    //     }
    //   }
    // `)

    return (
      <>
        <Header location = { this.props.location } />

        <div>
          <main>{this.props.children}</main>
          <Footer />
        </div>
      </>
    )
  }
}

export default Layout
