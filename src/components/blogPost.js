import React from "react"
import { graphql } from 'gatsby'
function BlogPost (props) {
  const post = props.data.markdownRemark;
  const {title} = post.frontmatter;
  return ( 
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{title}</h1>
            <br></br>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div> 
  )
}


export default BlogPost

export const query = graphql `
  query PostQuery($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
          title
      }
    }
  }
`
