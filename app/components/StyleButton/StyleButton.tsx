import { useState, MouseEvent } from "react";
import styles from "./StyleButton.module.css";
import themeLight from "./themeWhite.png";
import themeDark from "./themeDark.png";

interface StyleButtonProps {
    showThemeMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showTheme: boolean;
}

export default function StyleButton({
    showThemeMenu,
    showTheme,
}: StyleButtonProps) {

    return (
        <>
            <button className={styles.button} onClick={() => showThemeMenu(!showTheme)}>
                <img src={themeDark.src}></img>
            </button>
        </>
    );
}
