import ResponsiveImage from "@/components/ResponsiveImage";
import styles from './about.module.css'

export default function About(){
    return (
        <div>
            <h1>About</h1>
            <h2>目標は「NHK学生ロボコン」での優勝</h2>
            <p>私たち、Robohanの目標は日本最大級のロボットコンテスト「NHK学生ロボコン」での優勝です。<br/>「NHK学生ロボコン」とは国際大会である「ABUロボコン」の日本代表選考会であり、日本全国の「ABUロボコン」の出場権を懸けて戦います。</p>

            <div className={styles.nhkImages}>
                <div className={styles.imageWrapper}>
                    <ResponsiveImage
                        src="/images/about/DSC_6140.JPG"
                        alt="NHK学生ロボコン"
                        originalWidth={5568}
                        originalHeight={3812}
                        displaySize="100%"    
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <ResponsiveImage
                        src="/images/about/DSC_6142.JPG"
                        alt="NHK学生ロボコン"
                        originalWidth={5568}
                        originalHeight={3712}
                        displaySize="100%"
                    />
                </div>
            </div>

            <h2>出場大会</h2>
            <p>Robohanは「NHK学生ロボコン」だけでなく、関西圏を中心にさまざまな大会に出場しています。</p>


        </div>
    );
}