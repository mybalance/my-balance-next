import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Steps.module.css";

const Steps = () => {
  return (
    <>
      <Head>
				<link 
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <div className={styles.mainContainer} id="works">
        <h1 className={styles.header}><span className={styles.headerColour}>How does it work?</span></h1>

        {/* Flex section */}

        {/* One */}
        <section className={styles.section}>

          {/* Item one text */}
          <div className={styles.textSection}>
            <div className={styles.containerWrap}>
              <div className={styles.textContainer}>
                <h2 className={styles.boxHeader}>Step one</h2>
                <p className={styles.boxText}>
                  First, we calculate your footprint. The MyBalance app is quick and easy to use. To begin, we ask a few simple questions in order to calculate your current carbon footprint.
                </p> 
              </div>
            </div>
          </div>


          {/* Item one image */}
          <div className={styles.imageContainer}>
            <Image src={'/screenshot_selfAssessment.png'} width={816} height={1591}></Image>
          </div>
        
        </section>

        {/* Two */}
        <section className={styles.section}>

          {/* Item two text */}
          <div className={styles.textSection}>
            <div className={styles.containerWrap}>
              <div className={styles.textContainer}>
                <h2 className={styles.boxHeader}>Step two</h2>
                <p className={styles.boxText}>
                  Next, based on the answers that you provided in the previous step, we suggest a handful of changes that you could make to begin to bring down your footprint. 
                </p> 
              </div>
            </div>
          </div>

          {/* Item two image */}
          <div className={styles.imageContainer}>
            <Image src={'/screenshot_easyWins.png'} width={816} height={1591}></Image>
          </div>
        
        </section>

        {/* Three */}
        <section className={styles.section}>

          {/* Item three text */}
          <div className={styles.textSection}>
            <div className={styles.containerWrap}>
              <div className={styles.textContainer}>
                <h2 className={styles.boxHeader}>Step three</h2>
                <p className={styles.boxText}>
                  Next, let's get your footprint down to net-zero with our carbon offsetting schemes. This allows you to offset the carbon that you haven't removed with lifestyle changes.
                </p> 
              </div>
            </div>
          </div>

          {/* Item three image */}
          <div className={styles.imageContainer}>
            <Image src={'/screenshot_offsetting.png'} width={816} height={1591}></Image>
          </div>

        </section>

        {/* Four */}
        <section className={styles.section}>

          {/* Item four text */}
          <div className={styles.textSection}>
            <div className={styles.containerWrap}>
              <div className={styles.textContainer}>
                <h2 className={styles.boxHeader}>Step four</h2>
                <p className={styles.boxText}>
                  Finally, our carbon check-in tools allow you to track how much carbon you use each month. What's more, you'll be able to see how much your footprint has reduced based on the changes you make. 
                </p> 
              </div>
            </div>
          </div>

          {/* Item four image */}
          <div className={styles.imageContainer}>
            <Image src={'/screenshot_main.png'} width={816} height={1591}></Image>
          </div>

        </section>
      </div>
    </>
  )
}

export default Steps;

