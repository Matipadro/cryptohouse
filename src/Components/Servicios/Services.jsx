import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Services.module.css';
import formulario from '../../assets/img/services/formulario.png';
import marketing from '../../assets/img/services/marketing.png';
import ceo from '../../assets/img/services/ceo.png';
import auditoria from '../../assets/img/services/auditoria.png';
import proximamente from '../../assets/img/services/proximamente.png';

function Servicio() {
    return (
        <div className={styles.serviciosContainer}>

            <div className={styles.servicios}>
            <NavLink to="/servicios/formularioKYC">
                <div className={styles.item}>
                    <h3>Formulario K.Y.C</h3>
                    <div className={styles.imgContainer}>
                        <span></span>
                        <img className={styles.image} src={formulario} alt="Servicio de formulario KYC" />
                        <span></span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/servicios/marketingWEB">
                <div className={styles.item}>
                    <h3>Marketing Web</h3>
                    <div className={styles.imgContainer}>
                    <span></span>
                        <img src={marketing} alt="Servicio de marketing web" />
                    <span></span>
                    </div>
                </div>
                </NavLink>
                <NavLink to="/servicios/auditoria">
                <div className={styles.item}>
                    <h3>Auditoria</h3>
                    <div className={styles.imgContainer}>
                    <span></span>
                        <img src={auditoria} alt="Servicio de auditoria" />
                    <span></span>
                    </div>
                </div>
                </NavLink>
                <NavLink to="/servicios/SEOinfluencers">
                <div className={styles.item}>
                    <h3>SEO para influencers</h3>
                    <div className={styles.imgContainer}>
                    <span></span>
                        <img src={ceo} alt="Servicio de CEO para influencers" />
                    <span></span>
                    </div>
                </div>
                </NavLink>
                <div className={styles.item}>
                    <h3>Whitepapers</h3>
                    <div className={styles.imgContainerProx}>
                    <span></span>
                        <img src={proximamente} alt="Servicio de whitepaper que vendra proximamente" />
                    <span></span>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Creacion de NFT</h3>
                    <div className={styles.imgContainerProx}>
                    <span></span>
                        <img src={proximamente} alt="Servicio de NFT que vendra proximamente" />
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicio;