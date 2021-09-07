import React from "react";
import Head from "next/head";
import { useInView } from 'react-intersection-observer';
import styles from "../styles/IntroText.module.css";

const IntroText = () => {
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

            <section className={styles.mainContainer}>
                <div ref={ref} className={`animateSection ${inView && 'animateSection-transition'}`}>
                    <h1 className={styles.header}>Are you taking steps <span className={styles.headerColour}>towards</span> <span className={styles.headerColour}>net-zero?</span></h1>
                    <p className={styles.subheader}>If you care about our planet and believe like we do that it should be here for future generations to enjoy then you likely need to make some lifestyle changes. MyBalance has been designed to help you take those steps to live a low or zero carbon life!</p>
                </div>
            </section>
        </>
    )
}

export default IntroText;