import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
    <Global
        styles={css`
      html,
      body {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 24px;
        margin: 0;
        min-height: 100%;
      }
      html {
        background-color: #333;
        background: url("images/food.jpg") no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      body {
        background: rgba(0, 0, 0, 0.5);
      }
      main {
        background: rgba(250, 250, 250, 0.85);
        box-shadow: 0 0 29px #000;
        padding: 3rem 0;
        margin: 0 auto;
        max-width: 1024px;
      }
      h1 {
        color: #333333;
        font-size: 1.9em;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
      }
      h2 {
        color: #555555;
        font-size: 1.5em;
        margin: 0;
        text-align: center;
      }
      h3 {
        color: #1976d2;
        margin: 0;
        text-transform: uppercase;
      }
      h3 span {
        color: #333333;
        font-size: .6em;
        font-style: italic;
      }
      small {
        font-size: .8em;
        font-style: italic;
      }
      h4 {
        margin-top: 0;
        text-align: center;
      }
      button {
        background-color: #1976d2;
        border: none;
        border-radius: 0;
        font-size: 1em;
        color: #fff;
        cursor: pointer;
        padding: 10px;
        width: 100%;
      }
    `}
    />
)

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid dodgerblue;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 dodgerblue, 10px 10px 0 0 darkgrey;
  transition: all 0.1s linear;
  margin: 3rem;
  padding: 1rem 0.5rem;
`


export const hoverStyles = css`
  &:hover {
    background-color: #ffffff;
    border-color: dodgerblue;
    box-shadow: -15px -15px 0 0 dodgerblue, -30px -30px 0 0 #555555;
    cursor: pointer;
  }
`

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`

export const Beers = styled.div`
  margin: 0 auto;
  text-align: center;
`

export const Beer = styled.div`
  ${basicStyles};
  display: inline-block;
  margin: 1rem;
  & h4 {
    margin: 0;
  }
  & small {
    color: #333333;
    font-size: .6em;
  }
`
