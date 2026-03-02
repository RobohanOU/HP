import Image from "next/image";
import PageLinkButton from "@/components/PageLinkButton"
import ImageSlider from "@/components/ImageSlider";
import NewsGrid from "@/components/news/NewsGrid";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from './home.module.css'

const COMPETITIONS_IMAGE_SLIDES = [
    {
        id: 1,
        src: '/images/NoImage.png',
        alt: 'No Image',
        originalWidth: 1920,
        originalHeight: 1080
    },
    {
        id: 2,
        src: '/images/hero_gray.jpg',
        alt: 'Robohan',
        originalWidth: 3408,
        originalHeight: 2272
    },
    {
        id: 3,
        src: '/images/news/20260301/practice.jpg',
        alt: 'practice',
        originalWidth: 1920,
        originalHeight: 1080
    }
]



export default async function Home() {
    const postsDirectory = path.join(process.cwd(), 'posts');

    if(!fs.existsSync(postsDirectory)) return [];
    
    const allFiles = fs.readdirSync(postsDirectory);

    const posts = allFiles
        .filter((filename) => {
            return filename !== 'template.md' && filename !== 'README.md';
        })
        .map((filename)=> {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf-8');

            // gray-matterでメタデータと本文を分離
            const { data } = matter(fileContents);
            const slug = filename.replace(/\.md$/, '');
            const url = `/news/${slug}`
            
            return {
                url: url,
                title: data.title || 'No title', 
                date: data.date || '',
                description: data.description || '',
                image: data.image || '/images/news/notitle.jpg',
                imageAlt: data.imageAlt || data.title || '',
                imageWidth: Number(data.imageWidth),
                imageHeight: Number(data.imageHeight),
                displaySize: '100%',
            };
        });

    // 日付順にソート
    const lastesrPosts = posts
        .sort((a, b) => (a.date < b.date ? 1: -1))
        .slice(0, 3);

    return (
        <div>
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src='/images/hero_gray.jpg'
                        alt="Robohan"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                </div>
                <div className={styles.catchCopy}>
                    <h1>
                        <span className={styles.catchCopyText1}>創るで！</span>
                        <br/>
                        <span className={styles.catchCopyText2}>チカラの見せどころや！！</span>
                    </h1>
                </div>
                <div className={styles.blueLine}/>
                <div className={styles.navyLine}/>
                <div className={styles.backgroundLine}/>
            </section>
            <h2>私たちRobohanは、大阪大学の公認ロボット製作団体です。</h2>
            <p>日本最大級のロボットコンテスト「NHK学生ロボコン」で優勝することを目標に、日々メンバーと製作を続けています。</p>
            <div className={styles.about}>
                <div className={styles.aboutText}>
                    <h1>About</h1>
                    <h2>ものづくりの面白さを大切に。</h2>
                    <p>Robohanはロボコンを軸にものづくりが大好きな人たちが日々技術を切磋琢磨しています。<br/>Robohanの目標はNHK学生ロボコン優勝ですが、それだけでなくさまざまな大会に出場しています。</p>
                    <div className={styles.aboutButton}>
                        <PageLinkButton
                            text="ABOUT"
                            url="/about"
                        />
                    </div>
                </div>
                <div className={styles.slider}>
                    <h2>出場した大会</h2>
                    <ImageSlider
                        slides={COMPETITIONS_IMAGE_SLIDES}
                        displaySize="100%"
                        interval={7500}
                    />
                </div>
            </div>
            <div className={styles.join}>
                <h1>Join us!</h1>
                <h2>Robohanはどの時期からでも入部可能です!</h2>
                <p>Robohanでは一緒にロボットを作る仲間を大募集しています! クラフトベースで共にロボットを作りませんか？連絡はこちらまで↓</p>
                <PageLinkButton
                    text="JOIN"
                    url="/join"
                    className={styles.contactButton}
                />
                <p>新入生歓迎期（4～6月）は仮入部の受付も行っています!<br/>詳しくは4月サークルオリエンテーションや、5月いちょう祭で!</p>
            </div>
            <div className={styles.supporters}>
                <h1>Supporters</h1>
                <h2>Robohanは支援によって支えられています。</h2>
                <p>Robohanは大学組織・民間企業の方々をはじめとするスポンサー・サポーターの皆様からご支援をいただき、活動しております。<br />ご興味のある企業の方や、個人的に支援をしたい!という方がいらっしゃれば、ご連絡をぜひお願いいたします。</p>
                <p>支援額に応じた返礼もご用意しております。詳細は以下から↓</p>
                <PageLinkButton
                    text="SUPPORTERS"
                    url="/supporters"
                    className={styles.supportersButton}
                />
            </div>
            <div className={styles.news}>
                <h1>News</h1>
                <h2>Robohanの今。</h2>
                <div className={styles.newsPosts}>
                    <NewsGrid
                        posts={lastesrPosts}
                    />
                </div>
                <div className={styles.newsButton}>
                    <PageLinkButton
                        text="News"
                        url="/news"
                    />
                </div>
            </div>
        </div>
    )
}