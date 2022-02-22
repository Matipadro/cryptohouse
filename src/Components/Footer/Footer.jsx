import React from 'react';
import styles from './Footer.module.css';
import telegram from '../../assets/img/iconTelegram.png';
import mail from '../../assets/img/mail.png';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerIcons}>
                <ul>
                    <li><a href="https://t.me/La09armyNFT"><img className={styles.logo} src={telegram} alt="Logo CryptoHouse horizontal" /></a></li>
                    <li><img className={styles.logo} src={mail} alt="Logo CryptoHouse horizontal" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
