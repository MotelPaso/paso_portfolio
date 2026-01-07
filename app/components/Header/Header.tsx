"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import AngleDown from "./angle-down.png";
import StyleButton from "../StyleButton/StyleButton";

interface HeaderProps {
    showDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showMenu: boolean;
    showThemeMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showTheme: boolean;
}

export default function Header({
    showDropMenu,
    showMenu,
    showThemeMenu,
    showTheme,
}: HeaderProps) {
    const date: Date = new Date();
    const [time, setTime] = useState("");
    const getFormattedTime = (date: Date): string => {
        return (
            (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
            ":" +
            (date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes()) +
            (date.getHours() > 12 ? " PM" : " AM")
        );
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getFormattedTime(date));
        }, 1000);
        return () => clearInterval(timer);
    });

    return (
        <div className="static flex flex-row justify-between items-center w-full p-1 border-inherit ">
            <div className="flex align-center">
                <button
                    className="pl-1"
                    onClick={(): void => showDropMenu(!showMenu)}
                >
                    <img src={AngleDown.src} />
                </button>
            </div>
            <div>
                <p className={styles.time}>{time}</p>
            </div>
            <div className="flex flex-row justify-center">
                <StyleButton
                    showThemeMenu={showThemeMenu}
                    showTheme={showTheme}
                />
            </div>
        </div>
    );
}
