import React from "react";
import Head from "next/head";
import Person from "../components/Person";
import styles from "../styles/Team.module.css";

const Team = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.sectionContainer} id="team">
        <h1 className={styles.header}><span className={styles.headerColour}>Meet the team</span></h1>
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
              position="IT manager"
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