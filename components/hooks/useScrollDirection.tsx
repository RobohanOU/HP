// ヘッダーの表示で用いるスクロールを検知する関数コンポーネント
import { useState, useEffect } from "react";

export function useScrollDirection() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const SCROLL_THRESHOLD = 10

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // ページ最上部付近ならば表示
            if(currentScrollY == 0) {  
                setIsVisible(true);
                setLastScrollY(currentScrollY);
            }

            // スクロール量がしきい値以下のときは何もしない
            if(Math.abs(currentScrollY - lastScrollY) < SCROLL_THRESHOLD) {
                return
            }
            
            if (currentScrollY > lastScrollY) {  // 下にスクロール中 
                setIsVisible(false);                  // 表示しない
            }
            else {                   // 上にスクロール中
                setIsVisible(true);  // 表示する
            }

            setLastScrollY(currentScrollY);
        }
         
        // スクロール中にhandleScrollを実行
        window.addEventListener('scroll', handleScroll);
        
        // コンポーネントが消えるたびにイベントを消去
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return isVisible;
}