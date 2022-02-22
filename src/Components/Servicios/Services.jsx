import React from 'react';
import styles from './Services.module.css'
import formulario from '../../assets/img/services/formulario.png'
import marketing from '../../assets/img/services/marketing.png'
import ceo from '../../assets/img/services/ceo.png'
import auditoria from '../../assets/img/services/auditoria.jpg'
import proximamente from '../../assets/img/services/proximamente.png'

function Servicio() {
    return (
        <div className={styles.serviciosContainer}>

            <div className={styles.servicios}>
                <div className={styles.item}>
                    <h3>Formulario K.Y.C</h3>
                    <div className={styles.imgContainer}>
                        <img src={formulario} alt="Servicio de formulario KYC" />
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Marketing Web</h3>
                    <div className={styles.imgContainer}>
                        <img src={marketing} alt="Servicio de marketing web" />
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Auditoria</h3>
                    <div className={styles.imgContainer}>
                        <img src={auditoria} alt="Servicio de auditoria" />
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>CEO para influencers</h3>
                    <div className={styles.imgContainer}>
                        <img src={ceo} alt="Servicio de CEO para influencers" />
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Whitepapers</h3>
                    <div className={styles.imgContainerProx}>
                        <img src={proximamente} alt="Servicio de whitepaper que vendra proximamente" />
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Creacion de NFT</h3>
                    <div className={styles.imgContainerProx}>
                        <img src={proximamente} alt="Servicio de NFT que vendra proximamente" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Servicio;