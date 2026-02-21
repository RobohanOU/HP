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
            className={`${styles.baseCard}`}
        >
            <ResponsiveImage
                src={image}
                alt={imageAlt}
                originalWidth={imageWidth}
                originalHeight={imageHeight}
                displaySize={displaySize}
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <p className={`${styles.date}`}>{date}</p>
        </Link>
    )
}