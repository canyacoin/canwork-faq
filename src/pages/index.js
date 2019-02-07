import React from "react"
import Layout from "../components/layout"
import { Link, graphql, withPrefix } from 'gatsby'
import SEO from "../components/seo"
const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return(
    <Layout>
    <SEO title="CanWork Blog"  keywords={[`CanWork`,`Blog`, `Freelance`, `Cryptocurrency`]} ></SEO>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>FAQs</h1>
            <p>Frequently Asked Questions<br></br>We're here to help - search or browse below for some common questions about CanYa.</p>
            <div className="input-group">
                <input className="form-group form-control" type="text"></input>
                <div className="input-group-append">
                  <button className="btn btn-primary" style={{
                    backgroundColor   : '#33ccff',
                    borderColor       : '#33ccff',
                    backgroundImage   : 'url(/search.svg)',
                    backgroundRepeat  : 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize    : '50%',
                    padding           : '0 25px'
                  }}>
                  </button>
                </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img alt="CanYa Consult" style={{maxWidth: `300px`}} src={withPrefix('/consult.gif')}></img>
          </div>
        </div>
        {postList.edges.map(({ node }, i) => (
          <div key={`parentDiv`+i}> 
              <div key={`row`+i} className="row">
                <div key={`col`+i}  className="col-12"> 
                    <h1 key={`title_`+i} >{node.frontmatter.title}</h1> 
                    <p key={`excerpt_`+i} >{node.excerpt}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </Layout>
  )
} 

export default IndexPage;
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
  }
`