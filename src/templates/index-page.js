import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../img/image1.jpeg'
import hero from '../img/hero.jpg'
import photo from '../img/audience-black-and-white-blur-2014775.jpg'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Map from '../components/Map'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  mainpitch,
  moreinfo,
  location,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        className="columns herorow is-desktop"
        style={{
          display: 'flex',
          width: '100%',
          lineHeight: '1',
        }}
      >
        <div className="column hero1 is-full-mobile is-one-third-tablet is-two-fifths-desktop">
          <figure
            className="image"
            style={{
              height: '30vh',
            }}
          >
            <img
              src={logo}
              className="heroimg"
              alt="LifeSpring Bristol Logo"
              style={{
                borderRadius: '50%',
              }}
            />
          </figure>
        </div>
        <div className="column hero2 is-full-mobile is-two-thirds-tablet is-three-fifths-desktop">
          <h1
            className="has-text-centered has-text-weight-bold is-size-2-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: '#06A2DF',
              lineHeight: '1.3',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section" id="mainsection">
          <div className="columns">
            <div className="column is-10 is-offset-1">


                    <h1 className="title">{mainpitch.title}</h1>

                    <h4 className="subtitle">{mainpitch.description}</h4>

              </div>
            </div>
          </div>
        </div>
        <div className="section" id="moreinfo" style={{marginTop: '5%', marginBottom: '5%'}}>
          <div className="container">
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <figure className="image is-5by4">
                <img src={image} alt="" />
              </figure>
            </div>
            <div className="column is-5">
              <h1 className="title">{moreinfo.heading}</h1>
              <h4 className="subtitle">{moreinfo.description}</h4>
            </div>
          </div>
          </div>

        </div>
        <div className="section" id="location" style={{marginTop: '5%', marginBottom: '5%'}}>
            <div className="container">
              <div className="columns">
                <div className="column is-5 is-offset-1">
                  <h1 className="title">{location.heading}</h1>
                  <h4 className="subtitle">{location.description}</h4>
                </div>
                <div className="column is-5" style={{height: '45vh', width: '50%'}}>
                  <Map />
                </div>
              </div>
            </div>
        </div>

{/* <div className="section" id="blog">

        <div className="column is-12">
          <h1 className="has-text-weight-semibold is-size-2 title">From the Pastor's Heart</h1>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/blog">
              Read more
            </Link>
          </div>
        </div>

    </div> */}
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  moreinfo: PropTypes.object,
  location: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}


const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        moreinfo={frontmatter.moreinfo}
        location={frontmatter.location}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heroBanner {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
        }
        mainpitch {
          title
          description
        }
        moreinfo {
          heading
          description
        }
        location {
          heading
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
