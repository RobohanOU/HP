import Image from "next/image";
import styles from "./ResponsiveImage.module.css"
import { CSSProperties } from "react";
import { style } from "framer-motion/client";

interface ResponsiveImagePropsinterface {
    src: string;  // 画像のパス
    alt: string;  // 画像が読み込まれないときの代替テキスト
    desktopWidth: string;  // 設定したいサイズ(PC)
    desktopHeight: string;
    mobileWidth: string;  // 設定したいサイズ(スマホ)
    mobileHeight: string;
    borderRadius?: boolean;
    objectFit?: "cover" | "contain";
    objectPosition?: string;
}

export default function ResponsiveImage({
    src, 
    alt, 
    desktopWidth, desktopHeight, 
    mobileWidth, mobileHeight, 
    borderRadius=true, 
    objectFit="cover",
    objectPosition="center"
}: ResponsiveImagePropsinterface) {
    const imageStyle = {
        '--width-pc': desktopWidth,
        '--height-pc': desktopHeight,
        '--width-mobile': mobileWidth,
        '--height-mobile': mobileHeight,
    } as CSSProperties;
    
    return (
        <div 
            className={`${styles.container} 
            ${borderRadius ? styles.rounded : ''}`}
            style={imageStyle}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className={styles.image}
                style={{
                    objectFit: objectFit,
                    objectPosition: objectPosition
                }}
            />
        </div>
    )
}