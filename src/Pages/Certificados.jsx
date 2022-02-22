import React from 'react';
import styles from '../Styles/Certificados.module.css'
import marco from '../assets/img/marcoCertificado.png'

function Metaverso() {
    return (
        <div className={styles.certificados}>
            <h2>Certificacion</h2>
            <div className={styles.certifiacionContainer}>
                <img className={styles.logo} src={marco} alt="Marco de foto para los partners" />
                <h5></h5>
            </div>
        </div>
    );
}

export default Metaverso;