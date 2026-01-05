'use client'

import { useEffect, useState } from 'react';
import styles from './Header.module.css'
import StyleButton from '../StyleButton/StyleButton';
import DropMenu from '../DropMenu/DropMenu'

export default function Header() {
    const date: Date = new Date();

    const [time, setTime] = useState("");

    const getFormattedTime = (date: Date): string => {
        return (date.getHours() > 12 ? (date.getHours() - 12) : date.getHours()) + ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()) + (date.getHours() > 12 ? " PM" : " AM");
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getFormattedTime(date));
        }, 1000);
        return () => clearInterval(timer);
    });

    const changeGlobalTheme = (): void => {
        console.log("Ostia me han apretado")
    };


    return (<div className={styles.header}>
        <div className='flex align-center'>
            <DropMenu />
        </div>
        <div>
            <p className={styles.time}>{time}</p>
        </div>
        <div className="flex flex-row justify-center">
            <StyleButton />
        </div>
    </div>)
}