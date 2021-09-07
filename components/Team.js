import React from "react";
import Head from "next/head";
import { useInView } from 'react-intersection-observer';
import Person from "../components/Person";
import styles from "../styles/Team.module.css";

const Team = () => {
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

            <div ref={ref} className={`${styles.sectionContainer} animateSection ${inView && 'animateSection-transition'}`} id="team">
                <h1 className={styles.header}><span className={styles.headerColour}>Meet the team</span></h1>
                <p className={styles.subheader}>The MyBalance app and platform is built and maintained by a dedicated group of people who are committed to making the world a better place one step at a time.</p>
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
                        position="IT infrastructure"
                    />
                    <Person
                        name="Leon"
                        position="consultant"
                    />
                </div>
            </div>
        </>
    )
}

export default Team;