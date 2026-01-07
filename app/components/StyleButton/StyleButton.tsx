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
	const [theme, setTheme] = useState(0);

	const handleMouseClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		showThemeMenu(!showTheme);
		console.log("Apretao");
		/* show overlay with themes */
	};

	return (
		<>
			<button className={styles.button} onClick={handleMouseClick}>
				<img src={themeDark.src}></img>
			</button>
		</>
	);
}
