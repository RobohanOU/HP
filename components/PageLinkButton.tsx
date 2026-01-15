import Link from 'next/link';
import styles from './LinkButton.module.css';

type ButtonColor = 'blue' | 'white';

interface PageLinkButtonProps {
    text: string;   // ボタンに表示するテキスト
    url: string;   // 遷移先のURL
    color?: ButtonColor;
    className?: string;
}

export default function PageLinkButton({text, url, color = 'blue', className}: PageLinkButtonProps) {
    const containerClass = 
    color === 'white'
        ? styles.whiteContainer // 白背景のボタン
        : styles.blueContainer  // 青背景のボタン（デフォルト） 
    
    return (
        <Link
            href={url}

            /*HP外部のリンクのときセキュリティ対策*/
            target={url.startsWith('http') ? '_blank' : undefined}
            rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
            
            /*cssで引数のclassNameのstyleを設定すればページごとにデザイン変更可能（設定しなければデフォルトのまま）*/
            className={`${containerClass} ${className || ''}`}
        >
            <span className={styles.buttonText}>{text}</span>
            <div className={styles.buttonArrowIcon}>
                <svg
                    /*矢印をsvgで作成*/
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M5 12h13M12 5l7 7-7 7"/>
                </svg>
            </div>
        </Link>
    );
}