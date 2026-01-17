import Link from "next/link";
import styles from "./SponsorCard.module.css"
import ResponsiveImage from "../ResponsiveImage";

interface BronzeSuponsorCardProps {
    name: string
    logo: string
    logoAlt: string
    logoWidth: number
    logoHeight: number
    url?: string
}

const displaySize = "100%"

export default function BronzeSuponsorCard ({name, logo, logoAlt, logoWidth, logoHeight, url}: BronzeSuponsorCardProps) {
    const noLinkClass = `${styles.baseCard}`
    const linkClass = `${styles.linkCard} ${styles.baseCard}`
    const hasUrl = Boolean(typeof url === 'string' && url.length > 0);

    if(!hasUrl){
        return (
            <div className={noLinkClass}>
                <ResponsiveImage
                    src={logo}
                    alt={logoAlt}
                    originalWidth={logoWidth}
                    originalHeight={logoHeight}
                    displaySize={displaySize}
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
                <ResponsiveImage
                    src={logo}
                    alt={logoAlt}
                    originalWidth={logoWidth}
                    originalHeight={logoHeight}
                    displaySize={displaySize}
                />
                <h3>{name}</h3>
            </Link>
        )
    }
}