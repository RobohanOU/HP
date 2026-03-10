'use client';
import { useState, useEffect } from 'react';
import NewsGrid from './NewsGrid';
import Pagination from './Pagination';
import styles from './NewsContainer.module.css'

const desktopItemsPerPage = 12;
const mobileItemsPerPage = 6;
const desktopWidth = 768;

interface NewsCardData {
    url: string
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
}

interface NewsContainerProps {
    posts: NewsCardData[];
    currentPage: number
}

export default function NewsContainer({ posts, currentPage }: NewsContainerProps) {
    const [itemsPerPage, setItemsPerPage] = useState(desktopItemsPerPage);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const updateCount = () => {
            const width = window.innerWidth
            setItemsPerPage(width < desktopWidth ? mobileItemsPerPage : desktopItemsPerPage);
        };
        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    if (!isMounted) {
        return <div style={{ minHeight: '50vh' }}>Loading...</div>;
    };

    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const safePage = Math.min(currentPage, totalPages) || 1;

    const displayPosts = posts.slice(
        (safePage - 1) * itemsPerPage,
        safePage * itemsPerPage
    );

    if (posts.length > 0 && displayPosts.length === 0) {
        return <div>計算エラー: Total {posts.length}, ItemsPerPage {itemsPerPage}, Page {safePage}</div>;
    }

    return (
        <div className={styles.container}>
            <NewsGrid posts={displayPosts} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}