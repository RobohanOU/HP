import Link from 'next/link';
import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination ({currentPage, totalPages}: PaginationProps) {
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                {pages.map((page) => (
                    <li key={page}>
                        <Link
                            href={`/news?page=${page}`}
                            className={`${styles.link} ${page == currentPage ? styles.active : ''}`}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}