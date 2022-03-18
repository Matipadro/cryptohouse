import React from 'react';
import styles from '../Styles/Partners.module.css';
import magui from '../assets/img/partners/MaguiS.png'
import crafer from '../assets/img/partners/Crafer.png'
import criptospot from '../assets/img/partners/Criptospot.png'
import ingenious from '../assets/img/partners/IngeniousMiner.png'
import potion from '../assets/img/partners/PotionSeller.png'
import ledger from '../assets/img/partners/Ledger.png'

function Partners() {
    return (
        <div className={styles.partnersContainer}>
            <div className={styles.partnersTop}>
                <div className={styles.partner}>
                    <img className={styles.partnerImg} src={magui} alt="Marco de foto para los partners" />
                    <a href="https://www.instagram.com/magui.sunshine/" target="_blank" rel="noreferrer"><h4>Magui Sunshine</h4></a>  
                </div>
                <div className={styles.partner}>
                    <img className={styles.partnerImg} src={crafer} alt="Marco de foto para los partners" />
                    <a href="https://www.instagram.com/crafertv/" target="_blank" rel="noreferrer"><h4>Crafertv</h4></a>
                </div>
                <div className={styles.partner}>
                    <img className={styles.partnerImg} src={criptospot} alt="Marco de foto para los partners" />
                    <a href="https://www.instagram.com/criptospot/" target="_blank" rel="noreferrer"><h4>Criptospot</h4></a>
                </div>
            </div>
            <div className={styles.partnersBot}>
                <div className={styles.partner}>
                    <img className={styles.partnerImg} src={ingenious} alt="Marco de foto para los partners" />
                    <a href="https://ingeniousminer.io/" target="_blank" rel="noreferrer"><h4>Ingenious Miner</h4></a>
                </div>
                <div className={styles.partner}>
                    <img className={styles.partnerImg} src={potion} alt="Marco de foto para los partners" />
                    <a href="https://potionseller.io/PotionSeller/pages/landing.html" target="_blank" rel="noreferrer"><h4>Potion Seller</h4></a>
                </div>
                <div className={styles.partner}>
                    <img className={styles.partnerImg} src={ledger} alt="Marco de foto para los partners" />
                    <a href="https://www.ledger.com/" target="_blank" rel="noreferrer"><h4>Ledger</h4></a>
                </div>
            </div>
        </div>
    );
}

export default Partners;