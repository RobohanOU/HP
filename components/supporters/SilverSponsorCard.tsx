import Image from "next/image";
import Link from "next/link";
import styles from "./SponsorCard.module.css"

interface SilverSuponsorCardProps {
    name: string
    logo: string
    logoAlt: string
    logoWidth: number
    logoHeight: number
    url?: string
    description: string
}

export default function SilverSuponsorCard ({name, logo, logoAlt, logoWidth, logoHeight, url, description}: SilverSuponsorCardProps) {    
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
                <p>{description}</p>
            </div>
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
                <Image
                    src={logo}
                    alt={logoAlt}
                    width={logoWidth}
                    height={logoHeight}
                />
                <h3>{name}</h3>
                <p>{description}</p>
            </Link>
        )
    }
}