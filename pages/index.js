import Head from 'next/head';
import React from 'react';
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import IntroText from '../components/IntroText';
import Steps from "../components/Steps";
import Team from "../components/Team";
import Contact from "../components/Contact";
import VideoSection from "../components/VideoSection";
import Footer from '../components/Footer';

const home = () => {

  return (
    <>
      {/* Next Head component */}
      <Head>
        <title>MyBalance | Low carbon living</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Navigation component */}
      <Navigation />

      {/* Landing component */}
      <Landing />

      {/* Video section */}
      <VideoSection />

      {/* Intro text component */}
      <IntroText />

      {/* Steps component */}
      <Steps />

      {/* Team section */}
      <Team />

      {/* Contact section */}
      <Contact />

      {/* <Footer /> */}
      {/* <Footer /> */}
    </>
  )
}

export default home;