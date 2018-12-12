import React from "react"
import { graphql, Link } from "gatsby"
import Nav from '../components/Nav'
import { Wrapper, GridWrapper } from '../styles/styles'

const Index = ({ data }) => (
  <Wrapper>
    <Nav />
    <GridWrapper>
   {data.allPrismicPost.edges.map(({ node }) => (
        <li key={node.id}>
              <p>{node.uid}</p>
              <p>
                <Link to={node.uid}>{node.data.title.text}</Link>
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