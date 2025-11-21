import Link from "next/link";
import styles from "./SponsorCard.module.css"

interface NormalSupporterCardProps {
    name: string
    url?: string
}

export default function NormalSupporterCard ({name, url}: NormalSupporterCardProps) {
    const noLinkClass = `${styles.baseCard}`
    const linkClass = `${styles.linkCard} ${styles.baseCard}`

    if(url === undefined){
        return (
            <div className={noLinkClass}>{name}</div>
        )
    } else {
        return (
            <Link
                href={url}
                className={linkClass}

                /*HP外部のリンクのときセキュリティ対策*/
                target={url.startsWith('http') ? '_blank' : undefined}
                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {name}
            </Link>
        )
    }
}