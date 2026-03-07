"use client";
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import SNSLinkButton, { SNSPreset } from './SNSLinkButton';
import { useScrollDirection } from './hooks/useScrollDirection';
import styles from './Header.module.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => setIsOpen(false);
    const isVisible = useScrollDirection();

    return (
        <>
        <header className={`${styles.header} ${isVisible ? '' : styles.hidden}`}>
            <div className={styles.logo}>
                <ResponsiveImage
                    src="/images/logos/logo_R.png"
                    alt="Robohan Logo R"
                    width='3rem'
                    height='3rem'
                    borderRadius={false}
                />
                <ResponsiveImage
                    src="/images/logos/Robohan_black(no logo, full).png"
                    alt="Robohan Logo UoO"
                    width='9rem'
                    height='3rem'
                    borderRadius={false}
                />
            </div>
            <button
                className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
                onClick={toggleMenu}
            >
                <GiHamburgerMenu/>
            </button>

            <div className={`${styles.navContainer} ${isOpen ? styles.navOpen : ""}`}>
                <nav className={styles.navMenu}>
                    <Link href="/" className={styles.navLink}><p>HOME</p></Link>
                    <Link href="/about" className={styles.navLink}><p>ABOUT</p></Link>
                    <Link href="/join" className={styles.navLink}><p>JOIN</p></Link>
                    <Link href="/supporters" className={styles.navLink}><p>SUPPORTERS</p></Link>
                    <Link href="/news" className={styles.navLink}><p>NEWS</p></Link>
                </nav>
                <div className={styles.snsList}>
                    <SNSLinkButton
                        text="ourobohan"
                        url="https://www.youtube.com/@ourobohan"
                        icon={SNSPreset.youtube.icon}
                        iconColor={SNSPreset.youtube.iconColor}
                    />
                    <SNSLinkButton
                        text="Robohan_"
                        url="https://x.com/Robohan_"                            
                        icon={SNSPreset.x.icon}
                        iconColor={SNSPreset.x.iconColor}
                    />
                </div>
            </div>
            
        </header>
        <div className={styles.headerSpacer}/>
        </>
    )
}

