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
}

interface NewsGridProps {
    articles: NewsCardData[]
}

export default function NewsGrid ({articles}: NewsGridProps) {
    return (
        <div className={`${styles.gridContainer}`}>
            {articles.map((article, index) => (
                <NewsCard
                    key={index}
                    url={article.url}
                    title={article.title}
                    date={article.date}
                    description={article.description}
                    image={article.image}
                    imageAlt={article.imageAlt}
                    imageWidth={article.imageWidth}
                    imageHeight={article.imageHeight}
                />
            ))}
        </div>
    )
}
