import ResponsiveImage from "@/components/ResponsiveImage";
import CycleSlider from "@/components/CycleSlider";
import styles from './about.module.css'

const TEAM_IMAGE_HEIGHT = "15rem"

const TEAM_SLIDES = [
    {
        id: 1,
        slide:
        <div className={styles.teamWrapper}>
            <div className={styles.teamText}>
                <h2 className={styles.kikouhan}>機構班</h2>
                <p>ロボットのハードウェアの設計及び加工を行う班。<br/>機構は主にCADというソフトを使って、PC上で設計します。<br/>また、完成後は各々の担当する機構の保守も行います。</p>
            </div>
            <div className={styles.teamImageWrapper}>
                <ResponsiveImage
                    src="/images/about/kikou1.png"
                    alt="機構班1"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
                <ResponsiveImage
                    src="/images/about/kikou2.JPG"
                    alt="機構班2"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
                <ResponsiveImage
                    src="/images/about/kikou3.jpg"
                    alt="機構班2"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
            </div>
        </div>

    },
    {
        id: 2,
        slide:
        <div className={styles.teamWrapper}>
            <div className={styles.teamText}>
                <h2 className={styles.kairohan}>回路班</h2>
                <p>ロボットを動かす際に必要となる回路関係を担う班です。<br/>機構班が開発した機構を駆動させるための基板開発をメインに行います。<br/>機構班と制御班をつなげる重要な役割をもっています。</p>
            </div>
            <div className={styles.teamImageWrapper}>
                <ResponsiveImage
                    src="/images/about/kairo1.png"
                    alt="回路班1"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
                <ResponsiveImage
                    src="/images/about/kairo2.png"
                    alt="回路班2"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
                <ResponsiveImage
                    src="/images/about/kairo3.jpg"
                    alt="回路班3"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
            </div>
        </div>
    },
    {
        id: 3,
        slide:
        <div className={styles.teamWrapper}>
            <div className={styles.teamText}>
                <h2 className={styles.seigyohan}>制御班</h2>
                <p>ロボットを動かすためのプログラムを書く班です。<br/>制御班はロボットのモーター等の手動動作を実現する低レイヤー班と、自動動作を実現する高レイヤー班に分かれています。</p>
            </div>
            <div className={styles.teamImageWrapper}>
                <ResponsiveImage
                    src="/images/about/seigyo1.png"
                    alt="制御班1"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
                <ResponsiveImage
                    src="/images/about/seigyo2.png"
                    alt="制御班2"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
                <ResponsiveImage
                    src="/images/about/seigyo3.png"
                    alt="制御班3"
                    width="100%"
                    height={TEAM_IMAGE_HEIGHT}
                />
            </div>
        </div>
    }
];

export default function About(){
    return (
        <div>
            <h1>About</h1>
            <h2>目標は「NHK学生ロボコン」での優勝。</h2>
            <p>私たち、Robohanの目標は日本最大級のロボットコンテスト「NHK学生ロボコン」での優勝です。<br/>「NHK学生ロボコン」とは国際大会である「ABUロボコン」の日本代表選考会であり、日本全国の大学が「ABUロボコン」の出場権を懸けて戦います。</p>

            <div className={styles.nhkImages}>
                <ResponsiveImage
                    src="/images/about/IMG_4179.JPG"
                    alt="NHK学生ロボコン"
                    width="100%"
                    height="25rem"    
                />
                <ResponsiveImage
                    src="/images/about/DSC_6140.JPG"
                    alt="NHK学生ロボコン"
                    width="100%"
                    height="25rem"
                />
            </div>

            <h2>主な出場大会</h2>
            <p>Robohanは「NHK学生ロボコン」だけでなく、関西圏を中心にさまざまな大会に出場しています。</p>

            <div className={styles.joinRobocon}>
                <div className={styles.roboconCard}>
                    <ResponsiveImage
                        src="/images/about/DSC_6142.JPG"
                        alt="春ロボ"
                        width="100%"
                        height="25rem"
                        borderRadius={false}
                    />
                    <div className={styles.haruroboText}>
                        <h2>関西春ロボコン</h2>
                        <p>関西春ロボコンは、3月に開催される関西圏の大学・高専が参加する新人戦です。<br/>新入生の育成と技術交流を主目的とし、ロボコンをする上で必要なチームワークを磨きます。</p>
                    </div>
                </div>
                <div className={styles.roboconCard}>
                    <div className={styles.natsuroboText}>
                        <h2>関西夏ロボコン</h2>
                        <p>関西夏ロボコンは、関西圏の大学が8月に参加する大会です。<br/>RobohanではNHK学生ロボコンに向けた技術力向上を目的として、主に2年生が出場します。</p>
                    </div>
                    <ResponsiveImage
                        src="/images/about/natsurobo.JPG"
                        alt="夏ロボ"
                        width="100%"
                        height="25rem"
                        objectFit="cover"
                        borderRadius={false}
                    />
                </div>
                <div className={styles.roboconCard}>
                    <ResponsiveImage
                        src="/images/about/DSC_6142.JPG"
                        alt="学ロボ"
                        width="100%"
                        height="25rem"
                        borderRadius={false}
                    />
                    <div className={styles.gakuroboText}>
                        <h2>NHK学生ロボコン</h2>
                        <p>NHK学生ロボコンは、日本全国の大学が出場する国内最大規模の大会です。<br/>これまでに得た技術力・経験を活かして、集大成となるロボットを製作し、優勝を目指します。</p>
                    </div>
                </div>
            </div>

            <div className={styles.teamContent}>
                <h2>Robohanの3つの班。</h2>
                <p>Robohanでは機構班・回路班・制御班の3つの班に分かれて活動を行っています。<br/>1つのロボットを作るために各々の専門を決めることで、レベルの高いロボットを製作することができます。</p>
                <div className={styles.teamSlide}>
                    <CycleSlider
                        slides={TEAM_SLIDES}
                        interval={10000}
                        height='30rem'
                    />
                </div>                   
            </div>
        </div>
    );
}