import Image from 'next/image';
import Link from 'next/link';
import SNSLinkButton, { SNSPreset } from './SNSLinkButton';
import ResponsiveImage from './ResponsiveImage';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <div className={styles.profileText}>
                        <p>大阪大学公認ロボット製作団体</p>
                        <div style={{
                            display: 'flex',
                            margin: '1rem 0'
                        }}>
                            <ResponsiveImage
                                src="/images/logos/logo_R.png"
                                alt="Robohan Logo R"
                                desktopWidth='4rem'
                                desktopHeight='4rem'
                                mobileWidth='3rem'
                                mobileHeight='3rem'
                                borderRadius={false}
                            />
                            <ResponsiveImage
                                src="/images/logos/Robohan_black(no logo, full).png"
                                alt="Robohan Logo UoO"
                                desktopWidth='13rem'
                                desktopHeight='4rem'
                                mobileWidth='10rem'
                                mobileHeight='3rem'
                                borderRadius={false}    
                            
                            />
                        </div>
                        <p>大阪大学吹田キャンパス内<br className={styles.mobileOnlyBr}/>HANDAIクラフトベースC<br/>〒565-0871  大阪府吹田市山田丘2</p>
                    </div>
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
                        <SNSLinkButton
                            text="robohan_ou"
                            url="https://www.instagram.com/robohan_ou"
                            icon={SNSPreset.instagram.icon}
                            iconColor={SNSPreset.instagram.iconColor}
                        />
                        <SNSLinkButton
                            text="info@robohan.net"
                            url="mailto:info@robohan.net"
                            icon={SNSPreset.email.icon}
                            iconColor={SNSPreset.email.iconColor}
                        />
                    </div>
                </div>
                <nav className={styles.navMenu}>
                    <Link href="/" className={styles.navLink}><p>HOME</p></Link>
                    <Link href="/about" className={styles.navLink}><p>ABOUT</p></Link>
                    <Link href="/join" className={styles.navLink}><p>JOIN</p></Link>
                    <Link href="/supporters" className={styles.navLink}><p>SUPPORTERS</p></Link>
                    <Link href="/news" className={styles.navLink}><p>NEWS</p></Link>
                </nav>
            </div>
            <div className={styles.copyright}><p>©Robohan, All rights reserved</p></div>
        </footer>
    )
}

