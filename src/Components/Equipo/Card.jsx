import React,{useState} from 'react';
import styles from './Equipo.module.css'

function Card({name, img, position, siglas, instagram, twitch, twitter, youtube}){
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        console.log("activamos", isActive);
    };

    let classActive = isActive ? styles.active : null;

    return(
        <div className={styles.card + " " + classActive} onClick={toggleClass}>
            <div className={styles.professionalContainer}>
                <img src={img} alt="imagenes del team" />
            </div>
            <label>{name}</label>
            <div className={styles.popup}>
                <img src={img} alt="imagenes del team" />
                <h3>{position}</h3>
                <h3>{siglas}</h3>
                <h4>{instagram}</h4>
                <h4>{twitch}</h4>
                <h4>{twitter}</h4>
                <h4>{youtube}</h4>
            </div>
        </div>
    );
}

export default Card;