"use client";
import { useState, useEffect, useCallback, ReactNode, CSSProperties } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CycleSlider.module.css";

const variants = {
    enter: (direction: number) => ({
        zIndex: 0,
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

interface SlideItem {
    id: number;
    slide: ReactNode;
}

interface CycleSliderProps {
    slides: SlideItem[];
    interval?: number;  // 自動再生の間隔(s)
    desktopHeight: string;
    mobileHeight: string;
}

export default function ImageSlider({slides, interval=5000, desktopHeight, mobileHeight}: CycleSliderProps) {
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

    const sliderStyle = {
        '--desktop-height': desktopHeight,
        '--moblie-height': mobileHeight
    } as CSSProperties;

    return (
        <div className={styles.container}>
            <div className={styles.slide} style={sliderStyle}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 }
                        }}
                        className={styles.slideItem}
                        style={sliderStyle}
                    >
                        {slides[currentIndex].slide}
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