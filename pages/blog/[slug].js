import React from "react";
import fs from "fs"; 
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

const PostPage = (props) => {
  return (
    <>
      <h1>{props.frontmatter.title}</h1>
      <h4>{props.frontmatter.date}</h4>
      <img 
        src={props.frontmatter.cover_image}
      />
      <div>{props.content}</div>
      <Link href="/blog">Go back</Link>
    </>
  )
}

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync("./posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }))
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({params: {slug}}) {
  const markdownWithMeta = fs.readFileSync(`./posts/${slug}` + ".md", "utf-8");
  const {data: frontmatter, content} = matter(markdownWithMeta);
  return {
    props: {
      frontmatter, 
      slug, 
      content
    }
  }
};