import React from 'react';
import styles from './Footer.module.css';
import telegram from '../../assets/img/iconTelegram.png';
import mail from '../../assets/img/mail.png';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerIcons}>
                <ul>
                    <li><a href="https://t.me/CryptoHouseOficial" target="_blank" rel="noreferrer"><img className={styles.logo} src={telegram} alt="Icono de  Telegram para unirse al grupo" /></a></li>
                    <li><img className={styles.mail} src={mail} alt="Imagen para formulario de e-mail" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
