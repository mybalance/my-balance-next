import React from "react";
import Link from "next/link";

const Post = (props) => {
  return (
    <>
      <div>
        <img
          src={props.post.frontmatter.cover_image}
          alt=""
        />  
        <h2>{props.post.frontmatter.title}</h2>
        <h4>{props.post.frontmatter.date}</h4>
        <p>{props.post.frontmatter.subheading}</p>
        <Link href={`/blog/${props.post.slug}`}> 
          <p>Read more</p>
        </Link>
      </div>
    </>
  )
}

export default Post;

// title, data, subheading