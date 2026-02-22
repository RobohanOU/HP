import PageLinkButton from "@/components/PageLinkButton"
import styles from './home.module.css'
export default function Home() {
    return (
        <div>
            <h2>私たちRobohanは、大阪大学の公認ロボット製作団体です。</h2>
            <p>日本最大級のロボットコンテスト「NHK学生ロボコン」で優勝することを目標に、日々メンバーと製作を続けています。</p>
            <div className={styles.about}>
                <h1>About</h1>
                <h2>ものづくりの面白さを大事に。</h2>
                <p>Robohanはロボコンを軸にモノづくりが大好きな人たちが日々技術を切磋琢磨しています。</p>
                <p>Robohanの目標はNHK学生ロボコン優勝ですが、それだけでなくさまざまな大会に出場しています。</p>
                <PageLinkButton
                    text="ABOUT"
                    url="/about"
                />
            </div>
            <h1>Join us!</h1>
            <h2>Robohanはどの時期からでも入部可能です!</h2>
            <p>Robohanでは一緒にロボットを作る仲間を大募集しています!クラフトベースで共にロボットを作りませんか？連絡はこちらまで↓</p>
            <PageLinkButton
                text="CONTACT"
                url=""
            />
            <p>新入生歓迎期（4~6月）は仮入部の受付も行っています!<br/>詳しくは4月サークルオリエンテーションや、5月いちょう祭で!</p>
            <h1>Supporters</h1>
            <h2>Robohanは支援によって支えられています。</h2>
            <p>Robohanは大学組織・民間企業の方々をはじめとするスポンサー・サポーターの皆様からご支援をいただき、活動しております。<br />ご興味のある企業の方や、個人的に支援をしたい!という方がいらっしゃれば、ご連絡をぜひお願いいたします。</p>
            <p>支援額に応じた返礼もご用意しております。詳細は以下から↓</p>
            <PageLinkButton
                text="SUPPORTERS"
                url="/supporters"
            />
        </div>
    )
}