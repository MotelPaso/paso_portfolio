import { useState, MouseEvent } from "react";
import styles from "./StyleButton.module.css";
import themeLight from "./themeWhite.png";
import themeDark from "./themeDark.png";

export default function StyleButton() {

    const [theme, setTheme] = useState("");

    const handleMouseClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Apretao")
        /* show overlay with themes */
    }

    return (
        <>

            <button className={styles.button} onClick={handleMouseClick}><img src={themeDark.src}></img></button>
        </>);
}