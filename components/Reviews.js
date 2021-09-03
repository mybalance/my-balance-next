import React from "react";
import Head from "next/head";
import styles from "../styles/Reviews.module.css";

const Reviews = () => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <section className={styles.mainContainer}>
                <div className={styles.reviewsWrapper}>
                    <div className={styles.review}>
                        <p className={styles.reviewBody}>I love how easy the app makes getting an estimate of my carbon footprint, and lays out really quick and simple ways for me to offset it. Great stuff🙌</p>
                        <p className={styles.reviewerName}>- Lemondropz180</p>
                    </div>
                    <div className={styles.review}>
                        <p className={styles.reviewBody}>Does what it says on the tin</p>
                        <p className={styles.reviewerName}>- Tombert88</p>
                    </div>
                    <div className={styles.review}>
                        <p className={styles.reviewBody}>I cannot believe how easy this was to use and I am shocked by my carbon footprint. So glad I downloaded it.</p>
                        <p className={styles.reviewerName}>- Thevosp</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews;