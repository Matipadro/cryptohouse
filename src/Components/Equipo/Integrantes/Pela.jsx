import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Integrantes.module.css';
import pela from '../../../assets/img/team/emanuelPerfil.png';
import equis from '../../../assets/img/X.png';
import twitter from '../../../assets/img/logoTwitter.png';



function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={pela} alt="Foto del perfil de Emanuel Correa 'El Pela'" />
            <div className={styles.card}>
                <label>Emanuel Correa</label>
                <div className={styles.cargo}>
                    <h4>Director Financiero</h4>
                    <h4>CFO</h4>
                </div>
                <div className={styles.redes}>
                    <a href="https://twitter.com/emanuelcarreras" target="_blank" rel="noreferrer"><img src={twitter} alt="Logo para el perfil de Twitter" /></a> 
                </div>
            </div>
        </div>
    );
}

export default Equipo;