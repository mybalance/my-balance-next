import React from "react";
import Head from "next/head";
import { useInView } from 'react-intersection-observer';
import styles from "../styles/VideoSection.module.css";

const VideoSection = () => {
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
                <iframe
                    ref={ref}
                    className={`${styles.video} animateSection ${inView && 'animateSection-transition'}`}
                    src="https://player.vimeo.com/video/546426014?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    style={{ width: 'auto', height: '250px' }}
                    title="MyBalance.mov"
                >
                </iframe>
            </section>
        </>
    )
}

export default VideoSection;