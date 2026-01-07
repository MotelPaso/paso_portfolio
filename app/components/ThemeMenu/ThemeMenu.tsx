export default function ThemeMenu() {
	const themes: string[] = [
		"Dark",
		"Light",
		"Catpucchin-Mocha",
		"Kimble-Dark",
		"Kanagawa",
	];

	const changeGlobalTheme = (index: number) => {
		switchTheme(themes[index]);
	};
	const switchTheme = (themeName: string): void => {
		document.body.setAttribute("data-theme", themeName);
	};
	return (
		<div className="absolute flex flex-col justify-left w-50 top-12.5 right-0 border border-solid text-right font-bold text-l">
			{themes.map((theme, i) => (
				<button key={theme} onClick={() => changeGlobalTheme(i)}>
					{theme}
				</button>
			))}
		</div>
	);
}
