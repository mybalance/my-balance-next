import Head from 'next/head';
import React from 'react';
import { Mail, Twitter, Instagram } from "react-feather";
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import Steps from "../components/Steps";
import Person from "../components/Person";
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

      {/* Inlcude video instead of screenshot! */}

      {/* Landing component */}
      <Landing />

      {/* Steps component */}
      <Steps />

      {/* Team section */}

      {/* Main container */}
      <div className={styles.sectionContainer}>
        <h1 className={styles.teamHeader}>Meet the team</h1>
          <div className={styles.rowContainer}>
            <Person 
              name="Sam"
              position="director"
            />
            <Person 
              name="Rhys"
              position="developer"
            />
            <Person 
              name="Steve"
              position="director"
            />
            <Person 
              name="Raj"
              position="IT manager"
            />
            <Person 
              name="Leon"
              position="consultant"
            />
          </div>

{/* In order improve this code, could we loop over the Person component somehow? */}

      </div>

      <Footer />

      {/* Footer section */}
      {/* <footer class="bg-light py-5">
        <div class="container">
          <div class="small text-center text-muted">Copyright © 2021 - Carbon Innovations</div>
          <div class="small text-center text-muted"><a href="./terms">Ts & Cs</a></div>
          <div class="small text-center text-muted"><a href="./privacy">Privacy Policy</a></div>
        </div>
      </footer> */}

    </>
  )
}

export default home;