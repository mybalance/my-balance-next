import React, { useState, useEffect } from 'react';
import Head from "next/head";
import styles from '../styles/Person.module.css';
import info from "../public/assets/info.json";

const Person = ({ name, position }) => {
  // Text and overlay state variables
  const heading = {
    notVis: `${styles.headingNotVis}`, 
    vis: `${styles.headingVis}`  
  }

  const descriptionText = {
    notVis: `${styles.descriptionNotVis}`,
    vis: `${styles.descriptionVis}`
  }

  const imageOverlay = {
    notVis: `${styles.overlayNotVis}`,
    vis: `${styles.overlayVis}`
  }

  // Image heading, text and overlay state
  const [text, setText] = useState(descriptionText.notVis);
  const [overlay, setOverlay] = useState(imageOverlay.notVis);
  const [headingText, setHeadingText] = useState(heading.notVis); 

  const handleInput = () => {
    setText(text == descriptionText.notVis ? descriptionText.vis : descriptionText.notVis);
    setOverlay(overlay == imageOverlay.notVis ? imageOverlay.vis : imageOverlay.notVis);
    setHeadingText(headingText == heading.notVis ? heading.vis : heading.notVis);
  }
  // Check the logic in this function.

  // Set the className based on the name prop.
  let stylesVar;

  if (name == "Sam") {
    stylesVar = styles.imageSquareSam;
  } else if (name == "Rhys") {
    stylesVar = styles.imageSquareRhys;
  } else if (name == "Steve") {
    stylesVar = styles.imageSquareSteve;
  } else if (name == "Raj") {
    stylesVar = styles.imageSquareRaj;
  } else {
    stylesVar = styles.imageSquareLeon;
  }

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

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.personContainer}>
        {
          size > 1050 ?
            <div className={stylesVar}
              onMouseEnter={() => handleInput()}
              onMouseLeave={() => handleInput()}
            >
              <div className={overlay}></div>
              <div className={styles.textContainer}>
                <h3 className={headingText}>{name}, {position}</h3>
                <p className={text}>{info[`${name}`].description}</p>
              </div>
            </div>
          :
            <div className={stylesVar}
              onClick={() => handleInput()}
            >
              <div className={overlay}></div>
              <div className={styles.textContainer}>
                <h3 className={headingText}>{name}, {position}</h3>
                <p className={text}>{info[`${name}`].description}</p>
              </div>
            </div> 
        }
      </div>
    </>
  )
}

export default Person;