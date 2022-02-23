import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Servicio.module.css';
import formulario from '../../assets/img/services/formulario.svg';
import equis from '../../assets/img/X.png';

function Equipo() {
    const history = useNavigate();

    return (
        <div className={styles.integrante}>
            <img className={styles.close} src={equis} alt="Cruz para cerrar perfil" onClick={() => history(-1)}/>
            <img className={styles.perfilImg} src={formulario} alt="Foto del perfil de Justluks" />
            <div className={styles.card}>
                <p>
                    Nuestro formulario de “Know Your Customer” (K.Y.C.) fue diseñado bajo la premisa de brindar
                    la mayor de las seguridades a nuestra comunidad, para ello se piden datos muy específicos y
                    sensibles a quien lo desea realizar. Disponemos de una bóveda fría en la cual se deposita los
                    documentos firmados por el contratante y los mismos son resguardados en un archivo bajo
                    llave, el cual solo el personal autorizado tiene la potestad para abrir esa bóveda. De esta
                    forma, nos aseguramos de brindar la máxima seguridad a nuestro contratista.
                </p>
            </div>
        </div>
    );
}

export default Equipo;