import React from "react"
import { StaticQuery, graphql } from "gatsby" 

export default () => (
    <StaticQuery 
        query={graphql`
            query {
                site {
                    siteMetadata{
                        title
                        description
                        logoUrl
                    }
                }
            }
        `
        } render = {data => (
        <nav class="navbar navbar-expand-lg">
            <div className="container">
                <div className="row"  style={{ width: `100%` }}>
                    <div className="col-4">
                        <a class="navbar-brand" href="https://canwork.io">
                                <img src={data.site.siteMetadata.logoUrl} alt="CanWork logo"></img>
                        </a>
                    </div>
                    <div className="col-8 text-right">
                    <button class="navbar-toggler" style={{marginTop: `15px`}} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-right"   style={{ position: `absolute`, right: 0, top: `20px` }} id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="https://canwork.io/jobs">JOBS</a>
                            <a class="nav-item nav-link" href="https://canwork.io/jobs">BLOG</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        )}
    />
)

