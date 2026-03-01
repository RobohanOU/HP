import ResponsiveImage from "@/components/ResponsiveImage";
import PageLinkButton from "@/components/PageLinkButton";
import styles from "./join.module.css";

export default function Join () {
    return (
        <div className={styles.content}>
            <h1>Join</h1>
            <div className={styles.welcome}>
                <h2>ロボコンしませんか？</h2>
                <p>Robohanは1年中いつでも新入部員を募集しています!<br/>私たちは「NHK学生ロボコンでの優勝」を目標に日々活動しています。<br/>そこでは、技術力や経験よりもロボコンに対するやる気・熱意が求められます。逆に、やる気・熱意さえあれば、おのずと技術力や経験がついてきます。<br/>ぜひ、私たちと一緒に優勝を目指して活動しましょう。<br/>新入生はもちろん、2年生以上の方、高専編入生の方の入部も大歓迎です!<br/>少しでもRobohanに興味がある方は、ページ下部の「お問い合わせ」からぜひお問い合わせください!</p>

            </div>
            <div>
                <h2>充実した新入生教育</h2>
                <div className={styles.seminar}>
                    <div className={styles.imageWrapper}>
                        <ResponsiveImage
                            src="/images/join/esa.png"
                            alt="esa"
                            originalWidth={1919}
                            originalHeight={954}
                            displaySize="100%"
                        />
                    </div>
                    <div className={styles.description}>
                        <p>部員の大部分は、大学入学後から初めてロボット製作します。<br/>Robohanでは情報共有サービス「esa」を有効活用することで、知識ゼロからでもチームの第一線でロボット製作ができるレベルまで学べる環境を構築しています。<br/>自身が得た知識・技術をesaで共有することにより、チーム全体での技術力向上を実現しています。</p>
                    </div>
                    <div className={styles.description}>
                        <p>毎年4月～6月の期間には新入生教育として、豊中キャンパスで勉強会を実施しています。<br/>2年生および3年生の新入生教育担当がはじめから丁寧に教えることで、初心者の方でも確実にロボット製作ができるレベルまでフォローします。</p>
                        </div>
                    <div className={styles.imageWrapper}>
                        <ResponsiveImage
                            src="/images/join/seminar.jpg"
                            alt="勉強会"
                            originalWidth={4000}
                            originalHeight={2252}
                            displaySize="100%"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <PageLinkButton
                    text="お問い合わせ"
                    url="https://docs.google.com/forms/d/e/1FAIpQLSe0VcA8o55Yu9P0gTbuFr8K2c3w82YNrep-9Ru5jyLIg_OodA/viewform?usp=publish-editor"
                />
            </div>
        </div>
    );
}