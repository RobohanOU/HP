import React, { SVGProps } from "react";
import Link from "next/link";
import styles from "./SNSLinkButton.module.css";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa"
import { CiMail } from "react-icons/ci";

interface SNSLinkButtonProps {
    text: string;
    url: string;
    icon: React.ReactElement<SVGProps<SVGElement>>;
    iconColor?: string;
    bgColor?: string;
}

interface SNSPreset {
    icon: React.ReactElement;
    iconColor?: string;
    bgColor?: string;
}

export const SNSPreset: Record<string, SNSPreset> = {
    youtube: {
        icon: <FaYoutube/>,
        iconColor: '#ff0000' 
    },
    instagram: {
        icon: <FaInstagramSquare/>,
        iconColor: '#e4667dff'
    },
    x: {
        icon: <FaXTwitter/>,
        iconColor: '#000000'
    },
    email: {
        icon: <CiMail/>,
        iconColor: '#000000'
    }
}

const SNSLinkButton: React.FC<SNSLinkButtonProps> = ({
    text,
    url,
    icon,
    iconColor,
    bgColor
}) => {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener norefeeror"
            className={styles.linkButton}
            style={{backgroundColor: bgColor}}
        >
            
            {React.cloneElement(icon, {
                className: styles.icon,
                style: {color: iconColor}
            })}

            <span className={styles.text}>
                {text}
            </span>
        </Link>
    );
};

export default SNSLinkButton;

