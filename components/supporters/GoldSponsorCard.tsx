import ResponsiveImage from "../ResponsiveImage";
import Link from "next/link";
import styles from "./SponsorCard.module.css"

interface GoldSuponsorCardProps {
    name: string
    logo: string
    logoAlt: string
    url?: string
    description: string
}

export default function GoldSuponsorCard ({name, logo, logoAlt, url, description}: GoldSuponsorCardProps) {
    const noLinkClass = `${styles.baseCard}`
    const linkClass = `${styles.linkCard} ${styles.baseCard}`
    const hasUrl = Boolean(typeof url === 'string' && url.length > 0);

    if(!hasUrl){
        return (
            <div className={noLinkClass}>
                <ResponsiveImage
                    src={logo}
                    alt={logoAlt}
                    desktopWidth="100%"
                    desktopHeight="12rem"
                    mobileWidth="100%"
                    mobileHeight="12rem"
                    objectFit="contain"
                    borderRadius={false}
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
                <ResponsiveImage
                    src={logo}
                    alt={logoAlt}
                    desktopWidth="100%"
                    desktopHeight="12rem"
                    mobileWidth="100%"
                    mobileHeight="12rem"
                    objectFit="contain"
                    borderRadius={false}
                />
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
            </Link>
        )
    }
}