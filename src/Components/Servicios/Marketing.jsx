import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Servicio.module.css';
import marketing from '../../assets/img/services/marketing.svg';
import equis from '../../assets/img/X.png';

function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={marketing} alt="Foto del perfil de Justluks" />
            <div className={styles.card}>
                <p>
                    ¿Quieres iniciar tu proyecto, pero no tienes una página web, no tienes
                    información de como armar una o simplemente no tienes el equipo?
                    No te preocupes, CryptoHouse viene a solucionar ese problema,
                    ofreciendo su servicio de marketing web en el cual se diseñara, creara
                    y musicalizara la página del proyecto de acuerdo a las indicaciones
                    del contratista.
                    El equipo no solo se encarga de crear web de cero, sino que también
                    modifican webs ya existentes a gusto del cliente.
                </p>
            </div>
        </div>
    );
}

export default Equipo;