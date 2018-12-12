import React from "react"
import { graphql, Link } from "gatsby"
import Nav from '../components/Nav'
import { Wrapper, GridWrapper } from '../styles/styles'

import { Helmet } from 'react-helmet'


const Index = ({ data }) => (
  <Wrapper>
     <Helmet>
        <meta charSet="utf-8" />
        <title>/</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
    <Nav />
    <GridWrapper>
   {data.allPrismicPost.edges.map(({ node }) => (
        <li key={node.id}>
              <p>{node.uid}</p>
              <p>
                <a href={node.uid}>{node.data.title.text}</a>
              </p>
              <p>{node.data.author.text}</p>
        </li>
        
      ))}
      </GridWrapper>
  </Wrapper>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allPrismicPost(sort: { fields: [uid], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            author {
              text 
            }
            content {
              html 
            }
          }
        }
      }
    }
  }
`