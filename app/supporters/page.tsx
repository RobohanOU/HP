import SponsorGrid from "@/components/supporters/SponsorGrid"
import styles from "./supporters.module.css"

const Sponsors = [
    {
        name: "Robohan",                    /*スポンサー名*/
        grade: "gold",                      /*グレード*/
        logo: "/images/logos/logo.png",     /*ロゴ画像のパス(publicがroot)*/   
        logoAlt: "Robohan",                 /*ロゴ画像が表示できないときのテキスト*/
        logoWidth: 1057,                    /*ロゴ画像の横幅(px)*/
        logoHeight: 356,                    /*ロゴ画像の縦幅(px)*/
        url: "https://www.robohan.net/",    /*スポンサーのhpのurl*/
        
        /*スポンサー紹介文*/
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" 
    },
    {
        name: "Robohan_1",                  
        grade: "silver",                    
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                 
        logoWidth: 1057,                    
        logoHeight: 356,                    
        url: "https://www.robohan.net/",    
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"         
    },
    {
        name: "Robohan_2",                  
        grade: "silver",           
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                 
        logoWidth: 1057,                    
        logoHeight: 356,                 
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" 
    },
    {
        name: "Robohan_3",                  
        grade: "silver",                    
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                 
        logoWidth: 1057,                    
        logoHeight: 356,                    
        url: "https://www.robohan.net/",    
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"         
    },
    {
        name: "Robohan_4",                  
        grade: "bronze",           
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                 
        logoWidth: 1057,                    
        logoHeight: 356,                 
        url: "https://www.robohan.net/",
        description: "大阪大学公認ロボット製作団体Robohanです。\nNHK学生ロボコン優勝を目指して、日々ロボット開発に打ち込んでいます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" 
    },
        {
        name: "Robohan_5",                  
        grade: "bronze",                    
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                 
        logoWidth: 1057,                    
        logoHeight: 356,                    
        url: "https://www.robohan.net/",    
    },
    {
        name: "Robohan_6",                  
        grade: "bronze",           
        logo: "/images/logos/logo.png",        
        logoAlt: "Robohan",                 
        logoWidth: 1057,                    
        logoHeight: 356                 
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
    }
];

export default function Supporters() {
    return (
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
    )
}