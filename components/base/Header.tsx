import Image from 'next/image';
import Link from 'next/link';
import SNSLinkButton, { SNSPreset } from '../modules/SNSLinkButton';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.border}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logos/logo_R.png"
                        alt="Robohan Logo R"
                        width={48}
                        height={48}
                    >
                    </Image>
                    <Image
                        src="/images/logos/Robohan_black(no logo, full).png"
                        alt="Robohan Logo UoO"
                        width={150}
                        height={48}
                    >
                    </Image>
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
                                url="https://x.com/Robohan_"                            icon={SNSPreset.x.icon}
                                iconColor={SNSPreset.x.iconColor}
                            />
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

