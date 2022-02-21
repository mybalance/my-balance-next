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
            author: [author],
            date: new Date(post.frontmatter.date),
        });
    });

    // Write the RSS output to a public file
    fs.writeFileSync('public/blog/rss.xml', feed.rss2());

    console.log("\nWritten out RSS feed")
};