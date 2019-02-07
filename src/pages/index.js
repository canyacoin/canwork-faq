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
          <div className="col-md-6 faqTop">
            <h1>FAQs</h1>
            <p>Frequently Asked Questions<br></br>We're here to help - browse below for some common questions about CanYa.</p>
          </div>
          <div className="col-md-6 text-center">
            <img alt="CanYa Consult" style={{maxWidth: `300px`}} src={withPrefix('/consult.gif')}></img>
          </div>
        </div>
        {postList.edges.map(({ node }, i) => (
          <div key={`parentDiv`+i}> 
              <div key={`row`+i} className="row">
                <div key={`col`+i}  className="col-12 faqContainer" dangerouslySetInnerHTML={{ __html: node.html }} > 
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
    allMarkdownRemark {
      edges {
        node {
          fields{
            slug
          }      
          html
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
  }
`