import ResponsiveImage from "../ResponsiveImage";
import Link from "next/link";
import styles from "./NewsCard.module.css"

interface NewsCardProps {
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

export default function NewsCard ({url, title, date, description, image, imageAlt, imageWidth, imageHeight, displaySize}: NewsCardProps) {
    return (
        <Link
            href={url}
            className={styles.baseCard}
        >
            <div className={styles.image}>
                <ResponsiveImage
                    src={image}
                    alt={imageAlt}
                    originalWidth={imageWidth}
                    originalHeight={imageHeight}
                    displaySize={displaySize}
                />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.date}>{date}</p>
        </Link>
    )
}