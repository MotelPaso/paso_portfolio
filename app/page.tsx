'use client'
import { useState } from "react";
import Window from "./components/WindowFunc/Window";
import { WindowModel } from "./components/WindowClasses";
import Header from "./components/Header/Header";
import DropMenu from "./components/DropMenu/DropMenu";
import ThemeMenu from "./components/ThemeMenu/ThemeMenu"

export default function Home() {
    const [showMenu, setShowMenu] = useState(false);
    const [showTheme, setShowTheme] = useState(false);
    const [tilingDirection, setTilingDirection] = useState("Rows");
    const DIRECTIONS: string[] = ["Grid", "Dwindle", "Master", "Rows", "Cols", "Single"];
    const windows: WindowModel[] = [
        /* id, width, height, x, y*/
        new WindowModel("about", 50, 30, 20, 60),
        new WindowModel("title", 50, 50, 20, 364),
    ];

    return (
        <>
            <Header showDropMenu={setShowMenu} showMenu={showMenu} showThemeMenu={setShowTheme} showTheme={showTheme} />
            {showMenu && <DropMenu />}
            {showTheme && <ThemeMenu />}
            <div className="p-2">
                {windows.map((window, i) => (
                    <Window key={i} model={window} margin={4} border_width={4} />
                ))}
            </div>

        </>

    );
}
