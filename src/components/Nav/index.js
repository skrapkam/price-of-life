
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Link } from "gatsby"

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
             <Link to="/">The Price of Life</Link>  {this.props.title ? " / " + this.props.title : null}
             </div>

             <div css={NavStyle__Right}> 
             <Link to="/info">Info</Link>
             </div>
         </div>
     )
 }
}

export default Nav


