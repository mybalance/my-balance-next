import React from "react";
import Head from "next/head";
import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className={styles.mainContainer} id="home">
        <div className={styles.headerContainer}>
          <h1 className={styles.header}><span className={styles.headerColour}>Measure</span>, <span className={styles.headerColour}>reduce</span>, and <span className={styles.headerColour}>offset</span> your tenants' carbon.</h1>
          <p className={styles.subheader}>With the MyBalance app and platform, you'll have a simple, effective method of measuring, reducing, and offsetting your tenants' carbon footprint.</p>
        </div>
        <div className={styles.phoneContainer}>
          <img className={styles.phoneImage} src={'/screenshot_main.png'} width={816} height={1591} />
          <div className={styles.storeButtonsContainer}>
            <a className={styles.playStoreButton} href='https://play.google.com/store/apps/details?id=earth.mybalance.mybalance&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img width="auto" height="64" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
            </a>
            <a className={styles.appStoreButton} href='https://apps.apple.com/gb/app/mybalance/id1501751263'>
              <img width="auto" height="44" alt='Download from the App Store' src='/assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// https://coolors.co/007c7a-99ddc8-95bf74-04080f-c492b1
// https://coolors.co/007c7a-a6ece0-7adfbb-031926-0a1128

export default Landing;