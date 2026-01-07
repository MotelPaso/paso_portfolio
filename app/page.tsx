'use client'
import { useState } from "react";
import Window from "./components/MainWindow/Window";
import Header from "./components/Header/Header";
import DropMenu from "./components/DropMenu/DropMenu";
import ThemeMenu from "./components/ThemeMenu/ThemeMenu"

export default function Home() {
    const [showMenu, setShowMenu] = useState(false);
    const [showTheme, setShowTheme] = useState(false);
    return (
        <>
            <Header showDropMenu={setShowMenu} showMenu={showMenu} showThemeMenu={setShowTheme} showTheme={showTheme} />
            {showMenu && <DropMenu />}
            {showTheme && <ThemeMenu />}
            <div >

            </div>

        </>

    );
}
