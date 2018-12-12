import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Nav from '../components/Nav'
import { Wrapper, TextBlock } from '../styles/styles'

export default class Info extends Component {
  render() {
    return (
      <Wrapper>
        <Nav title="Info" />
        <TextBlock>
        Here is a place where a few friends can look across the lane and call out to one another in the race of faith. Where thoughts or meditations are shared so that our eyes remain fixed on Jesus.
        </TextBlock>
        <TextBlock>
            <li>Sam Chang</li>
        </TextBlock>
      </Wrapper>
    )
  }
}
