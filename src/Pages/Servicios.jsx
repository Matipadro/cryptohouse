import React from 'react';
import styles from '../Styles/Servicios.module.css';
import Services from '../Components/Servicios/Services';

function Servicios() {
    return (
        <div className={styles.serviciosContainer}>

        <div className={styles.servicios}>
            <h2>Servicios Cryptohouse</h2>
            <p>
                CryptoHouse cuenta con distintos servicios a disposición de quienes lo quieran contratar. 
                Los mismos son realizados por un grupo especializado en la realización de estos tipos de trabajo, 
                quienes trabajaran con la mayor premura posible para cumplir con el pedido del cliente, 
                además buscaran siempre tener la mayor de las calidades actualmente en el mercado.
            </p>
        </div>

        <Services/>
        </div>
    );
}

export default Servicios;

