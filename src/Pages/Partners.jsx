import React from 'react';
import marco from '../assets/img/marcoFotos.png';
import styles from '../Styles/Partners.module.css';

function Partners() {
    return (
        <div className={styles.partnersContainer}>
            <div className={styles.partnersTop}>
                <div className={styles.partner}>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los partners" />
                    <h4>Partners</h4>
                </div>
                <div className={styles.partner}>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los partners" />
                    <h4>Partners</h4>
                </div>
                <div className={styles.partner}>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los partners" />
                    <h4>Partners</h4>
                </div>
            </div>
            <div className={styles.partnersBot}>
                <div className={styles.partner}>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los partners" />
                    <h4>Partners</h4>
                </div>
                <div className={styles.partner}>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los partners" />
                    <h4>Partners</h4>
                </div>
                <div className={styles.partner}>
                    <img className={styles.logo} src={marco} alt="Marco de foto para los partners" />
                    <h4>Partners</h4>
                </div>
            </div>
        </div>
    );
}

export default Partners;