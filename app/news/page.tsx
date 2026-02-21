import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NewsGrid from '@/components/news/NewsGrid';

export default function getPosts() {
    const postsDirectory = path.join(process.cwd(), 'posts');

    if(!fs.existsSync(postsDirectory)) return [];

    const allFiles = fs.readdirSync(postsDirectory);
    
    const posts = allFiles
    .filter((filename) => {
        return filename !== 'template.md' && filename !== 'README.md';
    })
    .map((filename)=> {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');

        // gray-matterでメタデータと本文を分離
        const { data } = matter(fileContents);
        const slug = filename.replace(/\.md$/, '');
        const url = `/news/${slug}`
        
        return {
            url: url,
            title: data.title || 'No title', 
            date: data.date || '',
            description: data.description || '',
            image: data.image || '/images/news/notitle.jpg',
            imageAlt: data.imageAlt || data.title || '',
            imageWidth: Number(data.imageWidth),
            imageHeight: Number(data.imageHeight),
            displaySize: '1rem',
        };
    });

    // 日付順にソート
    const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1: -1));

    return (
        <div>
            <h1>News</h1>
            <NewsGrid posts={sortedPosts}/>
        </div>
    )
}