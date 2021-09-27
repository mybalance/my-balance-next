import Head from 'next/head';
import React from 'react';
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import IntroText from '../components/IntroText';
import Steps from "../components/Steps";
import Team from "../components/Team";
import Contact from "../components/Contact";
import VideoSection from "../components/VideoSection";
import Reviews from '../components/Reviews';
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

      {/* Nav component */}
      <Navigation />

      {/* Section components */}
      {/* These sections need contrast. At the moment, there isn't much that makes one section distinct from another.  */}
      {/* Use a different font colour for the body text and the headings.  */}
      {/* Add box shadow to the nav on scroll.  */}
      <Landing />
      <VideoSection />
      <IntroText />
      <Steps />
      <Reviews />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default home;

// https://coolors.co/007c7a-99ddc8-95bf74-04080f-c492b1
// https://coolors.co/007c7a-a6ece0-7adfbb-031926-0a1128