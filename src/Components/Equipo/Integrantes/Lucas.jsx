import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import styles from './Integrantes.module.css'
import team from '../team.json'
import lucas from '../../../assets/img/team/lucasPerfil.png'
import equis from '../../../assets/img/X.png'
import instagram from '../../../assets/img/logoInsta.png'
import twitter from '../../../assets/img/logoTwitter.png'
import twitch from '../../../assets/img/logoTwitch.png'
import youtube from '../../../assets/img/logoYT.png'


function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={lucas} alt="Foto del perfil de Lucas Ledesma" />
            <div className={styles.card}>
                <label>Lucas Ledesma</label>
                <div className={styles.cargo}>
                    <h4>Director Ejecutivo</h4>
                    <h4>CEO</h4>
                </div>
                <div className={styles.redes}>
                    <a href="https://www.instagram.com/lucas.brazu" target="_blank" rel="noreferrer"><img src={instagram} alt="Logo para el perfil de Instagram" /></a>
                </div>
            </div>
        </div>
    );
}

export default Equipo;