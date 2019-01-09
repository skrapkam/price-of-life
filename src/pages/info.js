import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Nav from '../components/Nav'
import { Wrapper, TextBlock } from '../styles/styles'

import { Helmet } from 'react-helmet'

export default class Info extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
        <meta charSet="utf-8" />
        <title>/ Info</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
        <Nav title="Info" />
        <TextBlock>
        Here is a place where a few friends can look across the lane and call out to one another in the race of faith. Where thoughts or meditations are shared so that our eyes remain fixed on Jesus.
        </TextBlock>
        <TextBlock>
            <li>Sam Chang</li>
            <li>Greg Tom</li>
        </TextBlock>
      </Wrapper>
    )
  }
}
