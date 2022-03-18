import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Certificado.module.css'
import chia from '../../assets/img/certificados/certificadoChiatk.png'
import equis from '../../assets/img/X.png'

function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.certificacion}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar KYC" onClick={() => history(-1)}/>
            <img className={styles.image} src={chia} alt="Certificado de KYC de ChiaTK" />
        </div>
    );
}

export default Equipo;