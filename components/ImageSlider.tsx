"use client";
import { useState, useEffect, useCallback } from "react";
import ResponsiveImage from "./ResponsiveImage";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence, scale } from "framer-motion";
import styles from "./ImageSlider.module.css";

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.95,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.95,
    }),
};

interface Slide {
    id: number;   // 画像のインデックス
    src: string;  // 画像のパス
    alt: string;  // 画像が読み込まれないときの代替テキスト
    originalWidth: number;  // 画像の横幅(px)
    originalHeight: number; // 画像の縦幅(px)
}

interface ImageSliderProps {
    slides: Slide[];
    displaySize: string;  // 設定したいサイズ
    interval?: number;  // 自動再生の間隔(s)
}

export default function ImageSlider({slides, displaySize, interval=5000}: ImageSliderProps) {
    const [[page, direction], setPage] = useState([0, 0]);

    // slidesの数で割った余りを使うことで無限ループを実現
    const currentIndex = Math.abs(page % slides.length);

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    useEffect(() => {
        const timer = setInterval(() => paginate(1), interval);
        return () => clearInterval(timer);
    }, [paginate, interval]);
        if(!slides || slides.length === 0) return null;

        console.log("index: ", currentIndex);

    return (
        <div className={styles.container}>
            <div className={styles.slide}>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "tween", duration: 0.8, ease: [0.4, 0, 0.2, 1]},
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 }
                        }}
                        className={styles.slideItem}
                    >
                        <ResponsiveImage
                            src={slides[currentIndex].src}
                            alt={slides[currentIndex].alt}
                            originalWidth={slides[currentIndex].originalWidth}
                            originalHeight={slides[currentIndex].originalHeight}
                            displaySize={displaySize}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <button onClick={() => paginate(-1)} className={styles.button}>
                <FaArrowLeft/>
            </button>
            <button onClick={() => paginate(1)} className={styles.button}>
                <FaArrowRight/>
            </button>
            <div className={styles.indicator}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            const newDirection = index > currentIndex ? 1: -1;
                            setPage([index, newDirection]);
                        }}
                        className={`${styles.dot} ${
                            currentIndex === index ? styles.dotActive : styles.dotNormal
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}