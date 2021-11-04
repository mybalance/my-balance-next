import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/navigation.module.css";

const Navigation = () => {
	const [size, setSize] = useState(0);
       
  useEffect(() => {
    setSize(window.innerWidth);
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

	const menu = {
		open: `${styles.open}`,
		closed: `${styles.closed}` 
	}

	const background = {
		on: `${styles.overlay}`,
		off: `${styles.overlayHidden}`  
	}

	const [ham, setHam] = useState(menu.closed);
	const [overlay, setOverlay] = useState(background.off)

	const handleClick = () => {
		setHam(ham == menu.open ? menu.closed : menu.open); 
		setOverlay(overlay == background.on ? background.off : background.on)
	};

	
  return (
		<>
			<Head>
				{/* <link 
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap" 
          rel="stylesheet"
        /> */}
				<link 
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" 
          rel="stylesheet">
        </link>
      </Head>

			{/* Main navbar */}
			<navbar className={styles.navbar}>
				<div>
					<Link href="/#home">
						<h1 className={styles.brand} >MyBalance</h1>
					</Link>
				</div>

				{
					size > 1000 ?
						<div className={styles.itemTwo}>
							<Link href="/#works">
								<p className={styles.navItem}>How it works</p>
							</Link>
							<Link href="/#team">
								<p className={styles.navItem}>Meet the team</p>
							</Link>
							<Link href="/#contact">
								<p className={styles.navItem}>Get in touch</p>
							</Link>
							<Link href="/blog">
								<p className={styles.navItem}>Blog</p>
							</Link>
						</div>
					:
						<div className={styles.square} onClick={handleClick}>
							<span className={ham}></span>
							<span className={ham}></span>
							<span className={ham}></span>
						</div>
				}
			</navbar>

			{/* Overlay */}
			<div className={overlay} onClick={handleClick}>
				<div className={styles.overlayContainer}>
					<Link href="/#home">
						<h2 className={styles.overlayItem} onClick={handleClick}>Home</h2>
					</Link>
					<Link href="/#works">
						<h2 className={styles.overlayItem} onClick={handleClick}>How it works</h2>
					</Link>
					<Link href="/#team">
						<h2 className={styles.overlayItem} onClick={handleClick}>Meet the team</h2>
					</Link>
					<Link href="/blog">
						<h2 className={styles.overlayItem} onClick={handleClick}>Blog</h2>
					</Link>
					<Link href="/#contact">
						<h2 className={styles.overlayItem} onClick={handleClick}>Contact</h2>
					</Link>
				</div>
			</div>
		</>
  )
}

export default Navigation;