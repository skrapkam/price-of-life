
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Component } from 'react'
import { node } from 'prop-types';

const NavStyle = css`
    margin: 0 0 32px; 
    display: grid;
    grid-template-columns: 1fr 1fr; 
`
const NavStyle__Left = css`
    text-align: left;
`
const NavStyle__Right = css`
    text-align: right;
`


class Nav extends Component {
 render() {
     return (
         <div css={NavStyle}>

            <div css={NavStyle__Left}>
             <a href="/">The Price of Life</a>  {this.props.title ? " / " + this.props.title : null}
             </div>

             <div css={NavStyle__Right}> 
             <a href="/info">Info</a>
             </div>
         </div>
     )
 }
}

export default Nav


