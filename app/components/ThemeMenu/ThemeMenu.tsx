
export default function ThemeMenu() {

    const changeGlobalTheme = (index: number) => {
        console.log(index);
    };
    return (
        <div className="absolute flex flex-col justify-left w-50 top-12.5 right-0 border border-solid text-right font-bold text-l">
            <button onClick={() => changeGlobalTheme(0)}>Dark</button>
            <button onClick={() => changeGlobalTheme(1)}>Light</button>
            <button onClick={() => changeGlobalTheme(2)}>Catpucchin</button>
            <button onClick={() => changeGlobalTheme(3)}>Dracula</button>
            <button onClick={() => changeGlobalTheme(4)}>Kanagawa</button>
        </div>);
}