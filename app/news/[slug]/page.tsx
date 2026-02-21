import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import ResponsiveImage from '@/components/ResponsiveImage';
import styles from './post.module.css'
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostData {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
}

async function getPostData(slug: string) : Promise<PostData>{
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // matterでメタデータと本文を分ける
    const {data, content} = matter(fileContents);

    return {
        slug, 
        content, 
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        imageAlt: data.imageAlt,
        imageWidth: data.imageWidth,
        imageHeight: data.imageHeight
    };
}

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const allFiles = fs.readdirSync(postsDirectory);

    return allFiles
    .filter((filename) => {
        return filename !== 'template.md' && filename !== 'README.md';
    })
    .map((filename) => {
        const slugWithoutMd = filename.replace(/\.md$/, '');
        return {
            slug: slugWithoutMd,
        };
    });
}

export default async function Post({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        notFound();
    }

    return (
        <article>
            <h1>News</h1>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>{postData.title}</h1>
                    <div className={styles.date}>{postData.date}</div>   
                </div>
                <ResponsiveImage
                    src={postData.image}
                    alt={postData.imageAlt}
                    originalWidth={postData.imageWidth}
                    originalHeight={postData.imageHeight}
                    displaySize='50rem'
                />
                <ReactMarkdown
                    components={{
                        a: ({node, href, children, ...props}) => {
                            if(!href) return null;

                            const isMarkdownFile = href.endsWith('.md');
                            const finalHref = isMarkdownFile
                            ? href.replace(/\.md$/, '')
                            : href;

                            const isInternal = href.startsWith('/') || href.startsWith('.');

                            if(isInternal) {
                                return (
                                    <Link href={finalHref} {...props}>
                                        {children}
                                    </Link>
                                );
                            }

                            return (
                                <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                                    {children}
                                </a>
                            );
                        }
                    }}
                >{postData.content}</ReactMarkdown>
            </div>
        </article>
    );
}