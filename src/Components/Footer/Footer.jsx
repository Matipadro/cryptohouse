import React, {useState} from 'react';
import styles from './Footer.module.css';
import telegram from '../../assets/img/iconTelegram.png';
import mail from '../../assets/img/mail.png';
import equis from '../../assets/img/X.png'
import criptoTune from '../../assets/audio/criptoTune-12db.mp3'

function Footer() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    let classActive = isActive ? styles.active : null;

    return (
        <div className={styles.footer + " " + classActive}>
            <div className={styles.footerIcons}>
                <ul>
                    <li><a href="https://t.me/CryptoHouseOficial" target="_blank" rel="noreferrer"><img className={styles.logo} src={telegram} alt="Icono de  Telegram para unirse al grupo" /></a></li>
                    <li><img className={styles.mail} src={mail} alt="Imagen para formulario de e-mail" onClick={toggleClass}/></li>
                </ul>
            </div>
            <div className={styles.modal}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar" onClick={toggleClass}/>
            <label>Contáctate con nosotros enviando un correo al siguiente e-mail para que podamos ayudarte y brindarte más información acerca de nuestros servicios.</label>
			<h2>
				contacto@cryptohouse.website
			</h2>
		</div>
                    <div className={styles.audioPlay}>
                <audio autoPlay loop>
                    <source src={criptoTune} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );
}

export default Footer;
