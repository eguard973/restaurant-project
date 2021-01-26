import {globalStyles} from '../shared/styles'

function Application({ Component, pageProps }) {
  return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      {globalStyles}
      <Component {...pageProps} />
      </>
  )
}

export default Application
