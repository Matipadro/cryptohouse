import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Integrantes.module.css';
import kadi from '../../../assets/img/team/kadiPerfil.png';
import equis from '../../../assets/img/X.png';
import instagram from '../../../assets/img/logoInsta.png';
import twitter from '../../../assets/img/logoTwitter.png';
import twitch from '../../../assets/img/logoTwitch.png';
import youtube from '../../../assets/img/logoYT.png';


function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={kadi} alt="Foto del perfil de 0800KADI" />
            <div className={styles.card}>
                <label>Kadi</label>
                <div className={styles.cargo}>
                    <h4>Creative Contente Area</h4>
                    <h4>CCA</h4>
                </div>
                <div className={styles.redes}>
                    <a href="https://instagram.com/0800kadi" target="_blank" rel="noreferrer"><img src={instagram} alt="Logo para el perfil de Instagram" /></a>
                    <a href="https://twitter.com/KADI_0800" target="_blank" rel="noreferrer"><img src={twitter} alt="Logo para el perfil de Twitter" /></a> 
                    <a href="https://twitch.tv/0800kadi" target="_blank" rel="noreferrer"><img src={twitch} alt="Logo para el perfil de Twitch" /></a>
                    <a href="https://youtube.com/c/KADIG0800" target="_blank" rel="noreferrer"><img src={youtube} alt="Logo para el perfil de Youtube" /></a>
                </div>
            </div>
        </div>
    );
}

export default Equipo;