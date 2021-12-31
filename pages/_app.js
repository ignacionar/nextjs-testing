import '../styles/globals.css'

function Nav () {
  return <h1>Header</h1>
}

function MyApp({ Component, pageProps }) {

  return (
  <>
    <Nav />
    <Component {...pageProps} />
  </> )
}

export default MyApp
