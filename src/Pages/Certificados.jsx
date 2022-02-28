import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Certificados.module.css';
import marco from '../assets/img/marcoCertificado.png';

function Certificados() {
    return (
        <div className={styles.certificados}>
            <h2>Certificacion</h2>
            <div className={styles.certifiacionContainer}>
            <NavLink to="/certificados/KYC-Cryptonite">
                <div className={styles.item}>
                    <label>Cryptonite</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-PathOfAlchemist">
                <div className={styles.item}>
                    <label>Path of Alchemist</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-PotionSeller">
                <div className={styles.item}>
                    <label>Potion Seller</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-WorldOfSwords">
                <div className={styles.item}>
                    <label>World of Swords</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-IngeniousMiner">
                <div className={styles.item}>
                    <label>Ingenious Miner</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-CryptoOne">
                <div className={styles.item}>
                    <label>Crypto One</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-DestinyOfWar">
                <div className={styles.item}>
                    <label>Destiny of War</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-IndigsLegend">
                <div className={styles.item}>
                    <label>Indigs Legend</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            <NavLink to="/certificados/KYC-Loxar">
                <div className={styles.item}>
                    <label>Loxar Games</label>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los certificados" />
                </div>
            </NavLink>
            </div>
        </div>
    );
}

export default Certificados;
