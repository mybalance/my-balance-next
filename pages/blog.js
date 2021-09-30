import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Post from "../components/Post";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  console.log(props.posts)
  return (
    <>
      <h1>This is the blog page.</h1>
      {props.posts.map((post, index) => {
        return (
          <>
            <Post post={post}/>
          </>
        )
      })}
    </>  
  )
}

export default Blog;

export async function getStaticProps() {
  // Get files from the posts folder
  const files = fs.readdirSync("./posts");

  // Get slug and frontmatter from post
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(`./posts/${filename}`, "utf-8");
    const {data: frontmatter} = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    }
  }
};