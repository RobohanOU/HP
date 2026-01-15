import Image from "next/image";
import Link from "next/link";
import styles from "./SponsorCard.module.css"

interface BronzeSuponsorCardProps {
    name: string
    logo: string
    logoAlt: string
    logoWidth: number
    logoHeight: number
    url?: string
}

export default function BronzeSuponsorCard ({name, logo, logoAlt, logoWidth, logoHeight, url}: BronzeSuponsorCardProps) {
    const noLinkClass = `${styles.baseCard}`
    const linkClass = `${styles.linkCard} ${styles.baseCard}`

    if(url === undefined){
        return (
            <div className={noLinkClass}>
                <Image
                    src={logo}
                    alt={logoAlt}
                    width={logoWidth}
                    height={logoHeight}
                />
                <h3>{name}</h3>
            </div>
        )
    } else {
        return (
            <Link
                href={url}

                /*HP外部のリンクのときセキュリティ対策*/
                target={url.startsWith('http') ? '_blank' : undefined}
                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={linkClass}
            >
                <Image
                    src={logo}
                    alt={logoAlt}
                    width={logoWidth}
                    height={logoHeight}
                />
                <h3>{name}</h3>
            </Link>
        )
    }
}