import React from 'react';
import styles from '../Styles/Nosotros.module.css'
import Comunidad from '../Components/Comunidad/Comunidad'
import Equipo from '../Components/Equipo/Equipo';

function Nosotros() {
    return (
        <div className={styles.nosotrosContainer}>

        <div className={styles.nosotros}>
            <h2>Nosotros</h2>
            <p> 
                CryptoHouse se compromete a crear un ambiente seguro y fiable en el mundo Cripto. <br /> <br />
                Estamos orgullosos de nuestro equipo de trabajo, quienes día a día se esfuerzan para dar la
                mejor calidad en el menor tiempo posible. Porque sabemos el esfuerzo que conlleva crear un
                proyecto de cero. <br /> <br />
                Nos comprometemos a trabajar con premura, siempre manteniendo nuestros valores y ética.
                Nos comprometemos a ofrecer la mayor seguridad posible, sin poner en riesgo los datos
                sensibles de quienes contraten nuestros servicios de K.Y.C. Nosotros, ya pusimos en marcha los 
                engranajes para poder brindar a la comunidad la seguridad que necesitan frente a los proyectos 
                de inversión por venir, tomando todos los recaudos necesarios y tomándonos el tiempo que sea 
                necesario para cumplir este objetivo.
            </p>
        </div>

        <Comunidad />
        <Equipo/>
        </div>
    );
}

export default Nosotros;