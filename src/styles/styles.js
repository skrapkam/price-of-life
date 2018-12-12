import styled from '@emotion/styled'

import './base.css'

export const Wrapper = styled.div`
   max-width: 960px;
   margin: 144px 0 0 25vw;
   padding-right: 32px;
   @media (max-width: 595px) {
       margin: 16px 8px 16px;
       padding: 8px;
   }
`
export const GridWrapper = styled.div`
    margin: 56px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(194px,1fr));
    grid-template-rows: repeat(auto-fill,minmax(100px,1fr));
    grid-gap: 2rem;
   @media (max-width: 595px) {
    grid-template-columns: none;
    grid-template-rows: none;
    li p:nth-child(3) {
        margin: 0 0 24px;
    }
   }
`

export const PostWrapper = styled.div`
    margin: 56px 0;
    max-width: 360px;
    h1 {
        margin: 0 0 16px;
        line-height: 3rem;
    }
`

export const TextBlock = styled.div`
    margin: 56px 0 32px;
    max-width: 440px;
    line-height: 1.5rem;
    li {
        border-bottom: none;
    }
    h1 {
        margin: 0 0 16px;
        line-height: 3rem;
    }
`