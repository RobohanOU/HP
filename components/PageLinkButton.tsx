import Link from 'next/link';
import { FaCircleArrowRight } from 'react-icons/fa6';
import styles from '@/components/PageLinkButton.module.css';

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
                <FaCircleArrowRight className={styles.icon}/>
            </div>
        </Link>
    );
}