import React from "react";
import Link from "next/link";
import styles from "../styles/Post.module.css";

const Post = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img 
            className={styles.image}
            src={props.post.frontmatter.cover_image}
            alt=""
          />
        </div>  
        <h2 className={styles.header}>{props.post.frontmatter.title}</h2>
        <div className={styles.infoContainer}>
          <span className={styles.authorCircle}></span>  
          <h4 className={styles.author}>{props.post.frontmatter.author}</h4>
          <h4 className={styles.date}>{props.post.frontmatter.date}</h4>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.fade}></div>
          <p className={styles.text}>{props.post.frontmatter.subheading}</p>  
        </div>
        <Link href={`/blog/${props.post.slug}`}> 
          <p className={styles.more}>Read more.</p>
        </Link>
      </div>
    </>
  )
}

export default Post;

// title, data, subheading

// line height 
// click card
