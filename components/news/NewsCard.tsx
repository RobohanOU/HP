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
}

export default function NewsCard ({url, title, date, description, image, imageAlt}: NewsCardProps) {
    return (
        <Link
            href={url}
            className={styles.baseCard}
        >
            <div className={styles.image}>
                <ResponsiveImage
                    src={image}
                    alt={imageAlt}
                    width="100%"
                    height="15rem"
                    objectFit="contain"
                />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.date}>{date}</p>
        </Link>
    )
}