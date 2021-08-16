import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <section className={styles.mainContainer} id="home">
        <div className={styles.headerContainer}>
          <h1 className={styles.header}><span className={styles.headerColour}>Measure</span>, <span className={styles.headerColour}>reduce</span>, and <span className={styles.headerColour}>offset</span> your tenants' carbon.</h1>
          <p className={styles.subheader}>With the MyBalance app and platform, you'll have a simple, effective method of measuring, reducing, and offsetting your tenants' carbon footprint.</p>
        </div>
        <div className={styles.phoneContainer}>
          <iframe
            className={styles.video} 
            src="https://player.vimeo.com/video/546426014?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen 
            style={{ width: '100%', height: '100%' }} 
            title="MyBalance.mov"
          >
          </iframe>
        </div>
      </section>
    </>
  )
}

// https://coolors.co/007c7a-99ddc8-95bf74-04080f-c492b1
// https://coolors.co/007c7a-a6ece0-7adfbb-031926-0a1128

export default Landing;