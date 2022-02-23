import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Integrantes.module.css';
import luks from '../../../assets/img/team/luksPerfil.png';
import equis from '../../../assets/img/X.png';
import instagram from '../../../assets/img/logoInsta.png';
import twitter from '../../../assets/img/logoTwitter.png';
import twitch from '../../../assets/img/logoTwitch.png';
import youtube from '../../../assets/img/logoYT.png';

function Equipo() {
    const history = useNavigate();

    console.log(">>>", luks)

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={luks} alt="Foto del perfil de Justluks" />
            <div className={styles.card}>
                <label>Justluks</label>
                <div className={styles.cargo}>
                    <h4>Director de Marketing</h4>
                    <h4>CMO</h4>
                </div>
                <div className={styles.redes}>
                    <a href="https://instagram.com/Justluks09" target="_blank" rel="noreferrer"><img src={instagram} alt="Logo para el perfil de Instagram" /></a>
                    <a href="https://twitter.com/JustLuks09" target="_blank" rel="noreferrer"><img src={twitter} alt="Logo para el perfil de Twitter" /></a> 
                    <a href="https://twitch.tv/justluks09" target="_blank" rel="noreferrer"><img src={twitch} alt="Logo para el perfil de Twitch" /></a>
                    <a href="https://youtube.com/c/JustLuks09" target="_blank" rel="noreferrer"><img src={youtube} alt="Logo para el perfil de Youtube" /></a>
                </div>
            </div>
        </div>
    );
}

export default Equipo;
