import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import ResponsiveImage from '@/components/ResponsiveImage';
import styles from './post.module.css'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface PostData {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    image: string;
    imageAlt: string;
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
                <div className={styles.imageWrapper}>
                    <ResponsiveImage
                        src={postData.image}
                        alt={postData.imageAlt}
                        width="100%"
                        height="40rem"
                    />
                </div>
                <ReactMarkdown
                    rehypePlugins={[rehypeUnwrapImages]}
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
                        },
                        p: ({ children }) => {
                            // 子要素の中に img (変換後は ResponsiveImage) が含まれているか判定
                            const hasImage = React.Children.toArray(children).some(
                                (child) => React.isValidElement(child) && (child.type === 'span' || (typeof child.type === 'function' && child.type.name === 'ResponsiveImage'))
                            );

                            // 画像が含まれる場合は div として出力、そうでなければ通常の p として出力
                            return hasImage ? (
                                <div className={styles.imageParagraph}>{children}</div>
                            ) : (
                                <p className={styles.paragraph}>{children}</p>
                            );
                        },
                        img: ({src, alt}) => {
                            if(!src || typeof src !== 'string') return null;
                            const decodedSrc = src.replace(/&amp;/g, '&');
                            const [cleanSrc, queryString] = decodedSrc.split('?');
                            const params = new URLSearchParams(queryString);
                            const originalWidth = params.get('width') || 190;
                            const originalHeight = params.get('height') || 1080;

                            return (
                                <div className={styles.insertImage}>
                                    <ResponsiveImage
                                        src={cleanSrc || '/images/NoImage.png'}
                                        alt={alt || ''}
                                        width="100%"
                                        height="35rem"
                                    />
                                </div>
                            )
                        }
                    }}
                >{postData.content}</ReactMarkdown>
            </div>
        </article>
    );
}