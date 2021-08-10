import React from "react";
import Head from "next/head";
import styles from "../styles/Steps.module.css";

const Steps = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.mainContainer} id="section-1">
        <h1 className={styles.header}>How does it work?</h1>
        <section className={styles.section}>
          <div className={styles.textContainer}>
            <h2 className={styles.boxHeader}>Step one</h2>
            <p className={styles.boxText}>
            Etiam odio justo, rhoncus venenatis faucibus sed, suscipit eleifend justo. Donec quam ante, commodo eu vehicula vel, scelerisque fermentum sapien.Nulla in ornare ligula. Nullam fringilla ex id nibh. 
            </p>
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.boxHeader}>Step Two</h2>
            <p className={styles.boxText}>
            Etiam odio justo, rhoncus venenatis faucibus sed, suscipit eleifend justo. Donec quam ante, commodo eu vehicula vel, scelerisque fermentum sapien.Nulla in ornare ligula. Nullam fringilla ex id nibh. 
            </p>
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.boxHeader}>Step Three</h2>
            <p className={styles.boxText}>
            Etiam odio justo, rhoncus venenatis faucibus sed, suscipit eleifend justo. Donec quam ante, commodo eu vehicula vel, scelerisque fermentum sapien.Nulla in ornare ligula. Nullam fringilla ex id nibh. 
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Steps;

// lobortis tristique. Nam vestibulum aliquam egestas. Aliquam auctor quis est pretium iaculis. Morbi mattis sem orci. Sed purus nulla, vehicula ut finibus nec, euismod ut augue. Curabitur scelerisque odio eget sodales malesuada. Phasellus venenatis nibh auctor fermentum hendrerit. Pellentesque semper leo arcu, eget ornare leo malesuada quis