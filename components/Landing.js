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

      <section className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}><span className={styles.headerColour}>Measure</span>, <span className={styles.headerColour}>reduce</span>, and <span className={styles.headerColour}>offset</span> your tenants' carbon.</h1>
          <p className={styles.subheader}>With the MyBalance app and platform, you'll have a simple, effective method of measuring, reducing, and offsetting your tenants' carbon footprint.</p>
        </div>
        <div className={styles.phoneContainer}>
          {/* <Image src={"/assets/img/peter-jan-rijpkema-wI6o8OwUwdw-unsplash.jpg"} height={600} width={300} alt="App gallery" /> */}
        </div>
      </section>
    </>
  )
}

// https://coolors.co/007c7a-99ddc8-95bf74-04080f-c492b1
// https://coolors.co/007c7a-a6ece0-7adfbb-031926-0a1128

export default Landing;