import React from "react";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../../styles/Slug.module.css";

const PostPage = (props) => {
    const article = props.frontmatter;

    return (
        <>
            <Navigation />
            <div className={styles.mainContainer}>
                <h1 className={styles.header}>{article.title}</h1>
                <div className={styles.infoContainer}>
                    <h4 className={styles.author}>{article.author}</h4>
                    <h4 className={styles.date}>{article.date}</h4>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image}
                        src={article.cover_image}
                    />
                </div>
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
                <Link href="/blog">
                    <div className={styles.button}>
                        <p className={styles.buttonText}>Go back</p>
                    </div>
                </Link>
            </div>
            <Footer />
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

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(`./posts/${slug}` + ".md", "utf-8");
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
};