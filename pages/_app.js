import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
      <Component {...pageProps} />
    // </ Layout>
  )
}

export default MyApp;

// on page load, bring in a random image from an array

// Server side, or backend: runs on the server on which your website is running
// Client side, or frontend: runs on the browser on which your website is loaded