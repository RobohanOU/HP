import Image from "next/image";
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
}

export default function NewsCard ({url, title, date, description, image, imageAlt, imageWidth, imageHeight}: NewsCardProps) {
    return (
        <Link
            href={url}
            className={`${styles.baseCard}`}
        >
            <Image
                src={image}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <p className={`${styles.date}`}>{date}</p>
        </Link>
    )
}