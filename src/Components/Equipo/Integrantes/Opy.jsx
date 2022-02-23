import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Integrantes.module.css';
import opy from '../../../assets/img/team/opyPerfil.png';
import equis from '../../../assets/img/X.png';
import instagram from '../../../assets/img/logoInsta.png';


function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={opy} alt="Foto del perfil de Opytha" />
            <div className={styles.card}>
                <label>Federico Val</label>
                <div className={styles.cargo}>
                    <h4>Marketing Customer Success</h4>
                    <h4>MCS</h4>
                </div>
                <div className={styles.redes}>
                    <a href="https://www.instagram.com/_fede.val" target="_blank" rel="noreferrer"><img src={instagram} alt="Logo para el perfil de Instagram" /></a>
                </div>
            </div>
        </div>
    );
}

export default Equipo;