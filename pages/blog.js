import React from "react";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import Post from "../components/Post";
import styles from "../styles/Blog.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

const Blog = (props) => {
  console.log(props.posts)
  return (
    <>
      <Head>
        <title>MyBalance | Low carbon living</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
        <div className={styles.mainContainer}>
          <h1 className={styles.header}>Blog</h1>
          <div className={styles.cardsContainer}>
            {props.posts.map((post, index) => {
              return (
                <>
                  <Post key={index} post={post}/>
                </>
              )
            })}
          </div>
        </div>
      <Footer />
    </>  
  )
}

export default Blog;

export async function getStaticProps() {
  const files = fs.readdirSync("./posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(`./posts/${filename}`, "utf-8");
    const {data: frontmatter} = matter(markdownWithMeta);
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
};