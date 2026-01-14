import Image from 'next/image';
import Link from 'next/link';
import SNSLinkButton, { SNSPreset } from '../modules/SNSLinkButton';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <div className={styles.profileText}>
                    <p>大阪大学公認ロボット製作団体</p>
                    <div>
                    <Image
                        src="/images/logos/logo_R.png"
                        alt="Robohan Logo R"
                        width={56}
                        height={56}
                    />
                    <Image
                        src="/images/logos/Robohan_black(no logo, full).png"
                        alt="Robohan Logo UoO"
                        width={175}
                        height={56}
                    />
                    </div>
                    <p>大阪大学吹田キャンパス内  HANDAIクラフトベースC<br/>〒565-0871  大阪府吹田市山田丘2</p>
                </div>
                <div className={styles.snsblock}>
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
                        <li>
                            <SNSLinkButton
                                text="robohan_ou"
                                url="https://www.instagram.com/robohan_ou"
                                icon={SNSPreset.instagram.icon}
                                iconColor={SNSPreset.instagram.iconColor}
                            />
                        </li>
                        <li>
                            <SNSLinkButton
                                text="info@robohan.net"
                                url="mailto:info@robohan.net"
                                icon={SNSPreset.email.icon}
                                iconColor={SNSPreset.email.iconColor}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <nav className={styles.navMenu}>
                <ul className={styles.navList}>
                    <li><Link href="./" className={styles.navLink}>HOME</Link></li>
                    <li><Link href="./about" className={styles.navLink}>ABOUT</Link></li>
                    <li><Link href="./join" className={styles.navLink}>JOIN</Link></li>
                    <li><Link href="./supporters" className={styles.navLink}>SUPPORTERS</Link></li>
                    <li><Link href="./news" className={styles.navLink}>NEWS</Link></li>
                </ul>
            </nav>
            <div className={styles.copyright}><p>©Robohan, All Rights Reserved.</p></div>
        </footer>
    )
}

