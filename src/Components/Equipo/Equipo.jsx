import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Equipo.module.css'
import Card from './Card'
import team from './team.json'
import chorch from '../../assets/img/team/hexaChorch.png'
import juanpold from '../../assets/img/team/hexaJuanpold.png'
import jungle from '../../assets/img/team/hexaJungle.png'
import kadi from '../../assets/img/team/hexaKadi.png'
import lucas from '../../assets/img/team/hexaLucas.png'
import luks from '../../assets/img/team/hexaLuks.png'
import opy from '../../assets/img/team/hexaOpy.png'
import pela from '../../assets/img/team/hexaPela.png'

function Equipo() {
    const imagenes = [
        chorch,
        juanpold,
        jungle,
        kadi,
        lucas,
        luks,
        opy,
        pela
    ]

    console.log(imagenes.map((e) => e))
    return (
        <div className={styles.teamContainer}>
            {/* <h2>Conoce nuestro equipo de trabajo</h2> */}
            <div className={styles.cards}>
                {team?.map((e) => {
                    return(
                        <div key={e.id}>
                            <NavLink to={`/nosotros/${e.link}`}>
                                <Card
                                    name={e.name}
                                    img={e.img}
                                    position={e.cargo}
                                    siglas={e.siglas}
                                    instagram={e.redes.map((r) => r.instagram?r.instagram: null)}
                                    twitch={e.redes.map((r) => r.twitch?r.twitch: null)}
                                    twitter={e.redes.map((r) => r.twitter?r.twitter: null)}
                                    youtube={e.redes.map((r) => r.youtube?r.youtube: null)}
                                />
                            </NavLink>
                        </div>
                    );
                })}
                
            </div>
        </div>
    );
}

export default Equipo;