import Link from "next/link";
import styles from "./NormalSupportersCard.module.css"
import React from "react";
import { GiRapidshareArrow } from "react-icons/gi";

interface NormalSupportersCardProps {
    name: string
    url?: string
    gridRow: number
    gridColumn: number
}

export default function NormalSupportersCard ({name, url, gridRow, gridColumn}: NormalSupportersCardProps) {
    /* グリッド表のどの位置に配置するか指定する変数*/
    const gridStyle: React.CSSProperties = {
        '--grid-row-start': gridRow,
        '--grid-column-start': gridColumn
    } as React.CSSProperties
    
    const noLinkClass = `${styles.gridchild}`
    const linkClass = `${styles.linkCard} ${styles.gridchild}`

    if(url === undefined){
        return (
            <div className={noLinkClass} style={gridStyle}>{name}</div>
        )
    } else {
        return (
            <Link
                href={url}

                /*HP外部のリンクのときセキュリティ対策*/
                target={url.startsWith('http') ? '_blank' : undefined}
                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={linkClass}
                style={gridStyle}
            >
                {name}
            </Link>
        )
    }
}