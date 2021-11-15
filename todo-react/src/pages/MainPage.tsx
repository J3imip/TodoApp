import React from 'react';
import styles from '../styles/main.module.scss';

export const MainPage: React.FC = () => {

    return(
        <div className={styles.container}>
            <div className={styles.title}>Hello world</div>
        </div>
    );
}