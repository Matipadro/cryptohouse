import React,{useState} from 'react';
import styles from './Equipo.module.css'

function Card({name, img}){
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        console.log("activamos", isActive);
    };

    let classActive = isActive ? styles.active : null;

    return(
        <div className={styles.card + " " + classActive} onClick={toggleClass}>
            <div className={styles.professionalContainer}>
                <span>VER MÁS</span>
                <img src={img} alt="imagenes del team" />
            </div>
            <label>{name}</label>
        </div>
    );
}

export default Card;