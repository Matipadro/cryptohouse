import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Servicio.module.css';
import seo from '../../assets/img/services/ceo.png';
import equis from '../../assets/img/X.png';

function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={seo} alt="Foto del perfil de Justluks" />
            <div className={styles.card}>
                <p>
                    ¿Sientes que tus redes sociales no tienen el alcance que quieres?
                    ¿Qué las mismas podrían ser mejores?
                    CryptoHouse viene a solucionar tu problema.
                    Contamos con un equipo de SEO capacitado en redes sociales el
                    cual se te va a brindar una, guía para que tus redes tengan el
                    alcance deseado y vaya más allá de sus capacidades y que tus
                    redes empiecen a trabajar por ti y que tú no trabajes para ellas.
                </p>
            </div>
        </div>
    );
}

export default Equipo;