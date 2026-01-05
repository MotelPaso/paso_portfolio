'use client'

import { useEffect, useState } from 'react';
import styles from './Header.module.css'

export default function Header() {
    const date : Date = new Date();

    const [time, setTime] = useState("");

    const getFormattedTime = (date:Date) : string => {

        return (date.getHours() > 12 ? (date.getHours() - 12) : date.getHours()) + ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()) + (date.getHours() > 12 ? " PM" : " AM");
    };
    useEffect( ()=> {
        const timer = setInterval(() => {
            setTime(getFormattedTime(date));
        }, 1000);
        return () => clearInterval(timer);
    });


    return (<div className={styles.header}>
        <p className={styles.time}>{time}</p>
    </div>)
}