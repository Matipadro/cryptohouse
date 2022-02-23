import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Servicio.module.css';
import auditoria from '../../assets/img/services/auditoria.svg';
import equis from '../../assets/img/X.png';

function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={auditoria} alt="Icono del servicio de auditoria" />
            <div className={styles.card}>
                <p>
                    CryptoHouse cuenta con un servicio de auditoria en el cual el equipo
                    designado a este sector se encargara de revisar línea por línea el contrato
                    inteligente del proyecto para advertir de cualquier irregularidad que se
                    encuentre en el mismo.
                </p>
            </div>
        </div>
    );
}

export default Equipo;