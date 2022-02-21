import React, { useState } from "react";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import Post from "../components/Post";
import styles from "../styles/Blog.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Fuse from "fuse.js";
import { generateRSSFeed } from "../internal/generateRSSFeed";

const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

const Blog = (props) => {
    const [search, setSearch] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleChange = (event) => {
        setSearch(event.target.value);
        setHasSearched(true);
        if (event.target.value === "") {
            setHasSearched(false);
        }
    };

    const handleSubmit = () => {
        console.log("Hello from the submit function!");
        setHasSearched(true);
        // set has searched to false
    };

    // Search functionality
    const fuse = new Fuse(props.posts, {
        keys: ["slug", "frontmatter.tags"]
    });

    const results = fuse.search(search);

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
                <div className={styles.inputContainer} >
                    <input
                        className={styles.input}
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Search"
                    />
                    {/* Style the text */}
                </div>

                <div className={styles.cardsContainer}>
                    {hasSearched ?
                        results.map((element, index) => {
                            return (
                                <>
                                    <Post key={index} post={element.item} />
                                </>
                            )
                        })
                        :
                        props.posts.map((post, index) => {
                            return (
                                <>
                                    <Post key={index} post={post} />
                                </>
                            )
                        })
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;

export async function getStaticProps() {
    const files = fs.readdirSync("./posts");
    let posts = files.map((filename) => {
        const slug = filename.replace(".md", "");
        const markdownWithMeta = fs.readFileSync(`./posts/${filename}`, "utf-8");
        const { data: frontmatter, content } = matter(markdownWithMeta);
        return {
            slug,
            frontmatter,
            content,
        }
    })

    posts = posts.sort(sortByDate)

    generateRSSFeed(posts);

    return {
        props: {
            posts,
        }
    }
};