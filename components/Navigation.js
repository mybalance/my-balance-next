import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navigation.module.css";

const Navigation = () => {
	const [ham, setHam] = useState(`${styles.closed}`);
	const [overlay, setOverlay] = useState(`${styles.overlayHidden}`)

	const handleClick = () => {
		setHam(ham == `${styles.open}` ? `${styles.closed}` : `${styles.open}`);
		setOverlay(overlay == `${styles.overlay}` ? `${styles.overlayHidden}` : `${styles.overlay}`)
	}

	const brandClick = () => {
		setOverlay(`${styles.overlayHidden}`);
		setHam(`${styles.closed}`);
	}

  return (
		<>
			<navbar className={styles.navbar}>
				<Link href="#home-top">
					<h1 className={styles.brand} onClick={brandClick}>MyBalance</h1>
				</Link>
				<div className={styles.square} onClick={handleClick}>
					<span className={ham}></span>
					<span className={ham}></span>
					<span className={ham}></span>
				</div>
			</navbar>

			<div className={overlay} onClick={handleClick}>
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
			</div>
		</>
  )
}

export default Navigation;