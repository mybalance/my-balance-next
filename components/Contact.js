import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap" 
          rel="stylesheet"
        />  
      </Head>

      <section className={styles.mainContainer} id="contact">
        <h1 className={styles.header}><span className={styles.headerColour}>Fancy a chat?</span></h1>
        <p className={styles.subheader}>If you'd like to get in touch to discuss how we can help your business, feel free to drop us an email. Just click the button below.</p>
        <a href="mailto:hello@mybalance.earth" className={styles.link}>
          <div className={styles.button}>Email</div>
        </a>
      </section>
    </>
  )
}

export default Contact;