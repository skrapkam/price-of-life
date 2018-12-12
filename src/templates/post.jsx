/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Nav from '../components/Nav'

import { graphql, Link } from 'gatsby'
import { Wrapper, TextBlock } from '../styles/styles'
import { Helmet } from 'react-helmet'

export const PostWrapper__Content = css`
  margin: 0 0 40px;
`

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <Wrapper>
       <Helmet>
        <meta charSet="utf-8" />
        <title>/ {prismicPost.uid}</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
      <Nav title={prismicPost.uid} />
      <TextBlock>
      <h1>{data.title.text}</h1>
      <div css={PostWrapper__Content} dangerouslySetInnerHTML={{ __html: data.content.html }} />
      <Link to="/">Back</Link>
      </TextBlock>
    </Wrapper>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
