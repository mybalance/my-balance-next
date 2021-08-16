import Head from 'next/head';
import React from 'react';
import { Mail, Twitter, Instagram } from "react-feather";
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import IntroText from '../components/IntroText';
import Steps from "../components/Steps";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";

const home = () => {

  return (
    <>

      {/* Next Head component */}
      <Head>
        <title>MyBalance | Low carbon living</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      {/* <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap" rel="stylesheet"></link> */}

      {/* Navigation component */}
      <Navigation />

      {/* Landing component */}
      <Landing />

      {/* Intro text component */}
      <IntroText />

      {/* Steps component */}
      <Steps />

      {/* Team section */}
      <Team />

      {/* Contact section */}
      <Contact />

      {/* <Footer /> */}
      <Footer />

    </>
  )
}

export default home;