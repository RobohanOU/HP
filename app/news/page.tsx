import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NewsContainer from '@/components/news/NewsContainer';
import styles from './news.module.css'

export default async function News({
    searchParams,
}: {
    searchParams: Promise<{page?: string}>;
}) {

    const {page} = await searchParams;
    const currentPage = Number(page) || 1;
    const postsDirectory = path.join(process.cwd(), 'posts');

    if (!fs.existsSync(postsDirectory)) {
        console.error('Directory NOT found');
        return <div>ディレクトリが見つかりません: {postsDirectory}</div>;
    }

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
            displaySize: '100%',
        };
    });

    const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    
    return (
        <div>
            <h1>News</h1>
            <NewsContainer
                posts={sortedPosts}
                currentPage={currentPage}
            />
        </div>
    )
}