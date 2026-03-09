"use client";
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import SNSLinkButton, { SNSPreset } from './SNSLinkButton';
import { useScrollDirection } from './hooks/useScrollDirection';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollVisible = useScrollDirection();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if(isOpen) {
            setIsAnimating(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => {
                setIsAnimating(false);
                document.body.style.overflow = 'auto';
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const isHeaderVisible = scrollVisible || isOpen || isAnimating;
    
    return (
        <header>
            <div className={`${styles.header} ${isHeaderVisible ? '' : styles.hidden}`}>
                {isOpen && (
                    <div 
                        className={styles.overlay}
                        onClick={closeMenu}
                    />
                )}
                <div className={styles.logo}>
                    <ResponsiveImage
                        src="/images/logos/logo_R.png"
                        alt="Robohan Logo R"
                        desktopWidth='3rem'
                        desktopHeight='3rem'
                        mobileWidth='2.4rem'
                        mobileHeight='2.4rem'
                        borderRadius={false}
                    />
                    <ResponsiveImage
                        src="/images/logos/Robohan_black(no logo, full).png"
                        alt="Robohan Logo UoO"
                        desktopWidth='9rem'
                        desktopHeight='3rem'
                        mobileWidth='8.1rem'
                        mobileHeight='2.4rem'
                        borderRadius={false}
                    />
                </div>
                <button
                    className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
                    onClick={toggleMenu}
                >
                    <GiHamburgerMenu/>
                </button>

                <div className={`${styles.navContainer} ${isOpen ? styles.navOpen : ""} ${isHeaderVisible ? '' : styles.hiddenNav}`}>
                    <nav className={styles.navMenu}>
                        <Link href="/" className={styles.navLink} onClick={closeMenu}><p>HOME</p></Link>
                        <Link href="/about" className={styles.navLink} onClick={closeMenu}><p>ABOUT</p></Link>
                        <Link href="/join" className={styles.navLink} onClick={closeMenu}><p>JOIN</p></Link>
                        <Link href="/supporters" className={styles.navLink} onClick={closeMenu}><p>SUPPORTERS</p></Link>
                        <Link href="/news" className={styles.navLink} onClick={closeMenu}><p>NEWS</p></Link>
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
            </div>
            <div className={styles.headerSpacer}/>
        </header>
    )
}

