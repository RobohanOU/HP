import Image from "next/image";
import styles from "./ResponsiveImage.module.css"

interface ResponsiveImagePropsinterface {
    src: string;  // 画像のパス
    alt: string;  // 画像が読み込まれないときの代替テキスト
    width: string;  // 設定したいサイズ
    height: string;
    borderRadius?: boolean;
    objectFit?: "cover" | "contain";
}

export default function ResponsiveImage({src, alt, width, height, borderRadius=true, objectFit="cover"}: ResponsiveImagePropsinterface) {
    return (
        <div 
            className={`${styles.container} ${borderRadius ? styles.rounded : ''}`}
            style={{
                width: width,
                height: height
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className={styles.image}
                style={{objectFit: objectFit}}
            />
        </div>
    )
}