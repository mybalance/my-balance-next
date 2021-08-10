import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Navigation.module.css";

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

	const [ham, setHam] = useState(menu.closed);

	const handleClick = () => {
		setHam(ham == menu.open ? menu.closed : menu.open); 
	};

  return (
		<>
			<Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

			<navbar className={styles.navbar}>
			{/* Scrollspy */}

				<div>
					<Link href="#home-top">
						<h1 className={styles.brand} >MyBalance</h1>
					</Link>
				</div>

				{
					size > 1000 ?
						<div className={styles.itemTwo}>
							<Link href="#what-we-do">
								<p className={styles.navItem}>What we do</p>
							</Link>
							<Link href="#meet-the-team">
								<p className={styles.navItem}>Meet the team</p>
							</Link>
							<Link href="#get-in-touch">
								<p className={styles.navItem}>Get in touch</p>
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

			{/* <div className={overlay} onClick={handleClick}>
				<div className={styles.overlayContainer}>
					<Link href="#home-top">
						<h2 className={styles.overlayItem} onClick={handleClick}>Home</h2>
					</Link>
					<Link href="#businesses">
						<h2 className={styles.overlayItem} onClick={handleClick}>For business</h2>
					</Link>
					<Link href="#contact">
						<h2 className={styles.overlayItem} onClick={handleClick}>Contact</h2>
					</Link>
					<Link href="/terms">
						<h2 className={styles.overlayItem} onClick={handleClick}>Terms and conditions</h2>
					</Link>
					<Link href="/privacy">
						<h2 className={styles.overlayItem} onClick={handleClick}>Privacy policy</h2>
					</Link>	
				</div>
			</div> */}
		</>
  )
}

export default Navigation;