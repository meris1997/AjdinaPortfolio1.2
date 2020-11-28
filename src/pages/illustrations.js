import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IllustrationsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            modalCurrent: 0
        }
        this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
        this.setModal = this.setModal.bind(this);
    }

    handlePortfolioClick(index, e) {
        e.preventDefault();
        this.setModal(true, index);
    }

    setModal(isShown, current) {
        this.setState({
            modalShow: isShown,
            modalCurrent: current
        });
    }

    render() {
        const { data } = this.props;
        const { activePopup, selectedItem } = this.state;

        return (
            <Layout>
                <section id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                                    <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Ekstrapoint - Linking website
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                                    <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Ekstrapoint - Email
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                                    <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Ekstrapoint - Email Verification
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                                    <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Kopce - Gift of happiness
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                                    <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Kopce - Gift of Hope
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                                    <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Kopce - Give a hand, share some love
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/7.jpg" onClick={this.handlePortfolioClick.bind(this, 6)}>
                                    <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Ekstrapoint- Password Verification
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/8.jpg" onClick={this.handlePortfolioClick.bind(this, 7)}>
                                    <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Ekstrapoint- Forgot password?
                    </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/9.jpg" onClick={this.handlePortfolioClick.bind(this, 8)}>
                                    <Img fluid={this.props.data.images.edges[8].node.childImageSharp.fluid} />
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">
                                            Illustrations
                    </div>
                                        <div className="project-name">
                                            Ekstrapoint- Level Up
                    </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
                    <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent} />
                </PortfolioModal>
            </Layout>
        );
    }
}
export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/illustrations/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;