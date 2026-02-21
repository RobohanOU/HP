import fs from "fs"
import NewsCard from "./NewsCard"
import styles from "./NewsGrid.module.css"

interface NewsCardData {
    url: string
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
    imageWidth: number
    imageHeight: number
    displaySize: string
}

interface NewsGridProps {
    posts: NewsCardData[]
}

export default function NewsGrid ({posts}: NewsGridProps) {
    return (
        <div className={`${styles.gridContainer}`}>
            {posts.map((post, index) => (
                <NewsCard
                    key={index}
                    url={post.url}
                    title={post.title}
                    date={post.date}
                    description={post.description}
                    image={post.image}
                    imageAlt={post.imageAlt}
                    imageWidth={post.imageWidth}
                    imageHeight={post.imageHeight}
                    displaySize={post.diplaySize}
                />
            ))}
        </div>
    )
}
