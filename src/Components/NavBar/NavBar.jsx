import React, {useState} from 'react';
import { useLocation, NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import logo from '../../assets/img/cryptohouseHorizontal.png';
import darkmode from '../../assets/img/Luna.png';

function NavBar() {

    const location = useLocation();
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        console.log("activamos", isActive);
    };

    let classActive = isActive ? styles.active : null;
    let activeClassName = styles.activo;

    return (
        <div className={styles.navBar}>
            <div className={styles.logoCH}>
                <img className={styles.logo} src={logo} alt="Logo CryptoHouse horizontal" />
                <img className={styles.darkmode} src={darkmode} alt="Luna para Dark Mode" />
            </div>
            <div className={styles.mainMenu} >
                <ul>
                    <li className={location.pathname === '/' ? activeClassName : null}><NavLink to="/" className={styles.navlink}>Inicio</NavLink></li>
                    <li className={location.pathname === '/nosotros' ? activeClassName : null}><NavLink to="/nosotros" className={styles.navlink}>Nosotros</NavLink></li>
                    <li className={location.pathname === '/servicios' ? activeClassName : null}><NavLink to="/servicios" className={styles.navlink}>Servicios</NavLink></li>
                    <li className={location.pathname === '/partners' ? activeClassName : null}><NavLink to="/partners" className={styles.navlink}>Partners</NavLink></li>
                    <li className={location.pathname === '/certificados' ? activeClassName : null}><NavLink to="/certificados" className={styles.navlink}>Certificados</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
