import Image from "next/image";
import styles from "./ResponsiveImage.module.css"

interface ResponsiveImagePropsinterface {
    src: string;  // 画像のパス
    alt: string;  // 画像が読み込まれないときの代替テキスト
    originalWidth: number;  // 画像の横幅(px)
    originalHeight: number; // 画像の縦幅(px)
    displaySize: string;  // 設定したいサイズ(rem)
}

export default function ResponsiveImage({src, alt, originalWidth, originalHeight, displaySize}: ResponsiveImagePropsinterface) {
    return (
        <div 
            className={styles.container}
            style={{width: displaySize}}
        >
            <Image
                src={src}
                alt={alt}
                width={originalWidth}
                height={originalHeight}
                className={styles.image}
                sizes={`(max-width: ${originalWidth}px) 100vw, ${displaySize}`}
            />
        </div>
    )
}