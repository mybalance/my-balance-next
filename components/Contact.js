import React from "react";
import Head from "next/head";
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <section ref={ref} className={`${styles.mainContainer} animateSection ${inView && 'animateSection-transition'}`} id="contact">
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