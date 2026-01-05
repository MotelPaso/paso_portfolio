import styles from './WindowStyle.module.css';

type MainWindow = {
    height: number;
    width: number;
};

let aboutMeWindow : MainWindow = {
    height : 30,
    width : 50
};

export default function Window(){

    return (<div className={styles.window} >
        nada
    </div>);
}