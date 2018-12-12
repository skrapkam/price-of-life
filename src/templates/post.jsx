/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Nav from '../components/Nav'

import { graphql, Link } from 'gatsby'
import { Wrapper, PostWrapper, TextBlock } from '../styles/styles'

export const PostWrapper__Content = css`
  margin: 0 0 40px;
`

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <Wrapper>
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
