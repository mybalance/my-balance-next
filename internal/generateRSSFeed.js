import fs from 'fs';
import { Feed } from "feed";

export const generateRSSFeed = (articles) => {
    const baseUrl = 'https://mybalance.earth';
    const author = {
        name: 'MyBalance',
        email: 'media@mybalance.earth',
        link: 'https://mybalance.earth/blog',
    };

    // Construct a new Feed object
    const feed = new Feed({
        title: 'MyBalance Newsfeed',
        description:
            "",
        id: baseUrl,
        link: baseUrl,
        language: 'en',
        feedLinks: {
            rss2: `${baseUrl}/blog/rss.xml`,
            json1: `${baseUrl}/blog/feed.json`,
        },
        author,
    });

    // Add each article to the feed
    articles.forEach((post) => {
        const url = `${baseUrl}/blog/${post.slug}`;

        feed.addItem({
            title: post.frontmatter.title,
            id: url,
            link: url,
            description: post.frontmatter.description,
            content: post.content,
            author: [{ name: post.frontmatter.author }],
            date: new Date(post.frontmatter.date),
            image: `${baseUrl}${post.frontmatter.cover_image}`,
            category: post.frontmatter.tags.map(tag => { return { name: tag } }),
        });
    });

    // Write the RSS output to a public file
    fs.writeFileSync('public/blog/rss.xml', feed.rss2());
    fs.writeFileSync('public/blog/feed.json', feed.json1());

    console.log("\nWritten out RSS feed, XML and JSON");
};