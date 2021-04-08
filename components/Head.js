import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";

const Head = ({ children, title }) => (
  <React.Fragment>
    <GoogleFonts href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </React.Fragment>
);

export default Head;

//  <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
//  <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"
//  rel="stylesheet" type="text/css" />