import NewsCard from "./NewsCard"
import styles from "./NewsGrid.module.css"

interface NewsCardData {
    url: string
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
}

interface NewsGridProps {
    posts: NewsCardData[]
}

export default function NewsGrid ({posts}: NewsGridProps) {
    return (
        <div className={styles.postsContainer}>
            {posts.map((post, index) => (
                <div className={styles.post} key={index}>
                    <NewsCard
                        key={index}
                        url={post.url}
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        image={post.image}
                        imageAlt={post.imageAlt}
                    />
                </div>
            ))}
        </div>
    )
}
