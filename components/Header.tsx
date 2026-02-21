"use client";
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import SNSLinkButton, { SNSPreset } from './SNSLinkButton';
import { useScrollDirection } from './hooks/useScrollDirection';
import styles from './Header.module.css';

export default function Header() {
    const isVisible = useScrollDirection();

    return (
        <>
        <header className={`${styles.header} ${isVisible ? '' : styles.hidden}`}>
            <div className={styles.logo}>
                <ResponsiveImage
                    src="/images/logos/logo_R.png"
                    alt="Robohan Logo R"
                    originalWidth={100}
                    originalHeight={100}
                    displaySize='3rem'
                />
                <ResponsiveImage
                    src="/images/logos/Robohan_black(no logo, full).png"
                    alt="Robohan Logo UoO"
                    originalWidth={1250}
                    originalHeight={400}
                    displaySize='10rem'
                />
            </div>
            <nav className={styles.navMenu}>
                <ul className={styles.navList}>
                    <li><Link href="/" className={styles.navLink}>HOME</Link></li>
                    <li><Link href="/about" className={styles.navLink}>ABOUT</Link></li>
                    <li><Link href="/join" className={styles.navLink}>JOIN</Link></li>
                    <li><Link href="/supporters" className={styles.navLink}>SUPPORTERS</Link></li>
                    <li><Link href="/news" className={styles.navLink}>NEWS</Link></li>
                </ul>
            </nav>
            <div>
                <ul className={styles.snsList}>
                    <li>
                        <SNSLinkButton
                            text="ourobohan"
                            url="https://www.youtube.com/@ourobohan"
                            icon={SNSPreset.youtube.icon}
                            iconColor={SNSPreset.youtube.iconColor}
                        />
                    </li>
                    <li>
                        <SNSLinkButton
                            text="robohan_"
                            url="https://x.com/Robohan_"                            
                            icon={SNSPreset.x.icon}
                            iconColor={SNSPreset.x.iconColor}
                        />
                    </li>
                </ul>
            </div>
        </header>
        <div className={styles.headerSpacer}/>
        </>
    )
}

