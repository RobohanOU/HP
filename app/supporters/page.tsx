import SponsorGrid from "@/components/supporters/SponsorGrid"
import styles from "./supporters.module.css"
import PageLinkButton from "@/components/home/PageLinkButton";

const Sponsors = [
    {
        name: "Robohan",                    /*スポンサー名*/
        grade: "gold",                      /*グレード*/
        logo: "/images/logos/logo.png",     /*ロゴ画像のパス(publicがroot)*/   
        logoAlt: "Robohan",                 /*ロゴ画像が表示できないときのテキスト*/
        url: "https://www.robohan.net/",    /*スポンサーのhpのurl*/
        
        /*スポンサー紹介文*/
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" 
    },
    {
        name: "Robohan_1",                  
        grade: "silver",                    
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                                
        url: "https://www.robohan.net/",    
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"         
    },
    {
        name: "Robohan_2",                  
        grade: "silver",           
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                           
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" 
    },
    {
        name: "Robohan_3",                  
        grade: "silver",                    
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                                  
        url: "https://www.robohan.net/",    
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"         
    },
    {
        name: "Robohan_4",                  
        grade: "bronze",           
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                              
        url: "https://www.robohan.net/",
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" 
    },
        {
        name: "Robohan_5",                  
        grade: "bronze",                    
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                                    
        url: "https://www.robohan.net/",    
    },
    {
        name: "Robohan_6",                  
        grade: "bronze",           
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                             
    },
    {
        name: "ロボ半太郎1",
        grade: "normal"
    },
    {
        name: "ロボ半太郎2",
        grade: "normal"
    },
    {
        name: "ロボ半太郎3",
        grade: "normal"
    },
    {
        name: "ロボ半太郎4",
        grade: "normal"
    },
    {
        name: "ロボ半太郎5",
        grade: "normal"
    },
];

export default function Supporters() {
    return (
        <div>
            <div>
                <h1>Supporters</h1>
                <div className={styles.sponsorContainer}>
                    <h2 className={styles.goldSponsor}>Gold Sponsors</h2>
                    <SponsorGrid
                        sponsors={Sponsors}
                        grade="gold"
                    />
                </div>
                <div className={styles.sponsorContainer}>
                    <h2 className={styles.silverSponsor}>Silver Sponsors</h2>
                    <SponsorGrid
                        sponsors={Sponsors}
                        grade="silver"
                    />
                </div>
                <div className={styles.sponsorContainer}>
                    <h2 className={styles.bronzeSponsor}>Bronze Sponsors</h2>
                    <SponsorGrid
                        sponsors={Sponsors}
                        grade="bronze"
                    />
                </div>
                <div className={styles.sponsorContainer}>
                    <h2 className={styles.normalSponsor}>協力企業・個人サポーター様</h2>
                    <SponsorGrid
                        sponsors={Sponsors}
                        grade="normal"
                    />
                </div>
            </div>
            <div className={styles.request}>
                <h1>ご支援のお願い</h1>
                <p>Robohanは大学組織・民間企業の方々をはじめとするスポンサー・サポーターの皆様からご支援をいただき、活動しております。<br />ご興味のある企業の方や、個人的に支援をしたい!という方がいらっしゃれば、以下の「CONTACT」からご連絡をぜひともお願いいたします。</p>
                <div className={styles.linkButton}>
                    <PageLinkButton
                        text="CONTACT"
                        url="https://docs.google.com/forms/d/e/1FAIpQLSe0VcA8o55Yu9P0gTbuFr8K2c3w82YNrep-9Ru5jyLIg_OodA/viewform?usp=publish-editor"
                        color='white'
                        className="contactButton"
                    />
                </div>
            </div>
        </div>
    )
}