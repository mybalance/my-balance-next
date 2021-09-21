import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link 
          // Lato
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" 
          rel="stylesheet"

          // Merriweather
          // href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap"
          // rel="stylesheet"

        />  
    </Head>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp;