import React, { useEffect, useRef } from 'react';
import { gsap, scrollTrigger } from "gsap";
import styles from '../Styles/HomePage.module.css';
import highlights from '../assets/video/cryptohouseTeaser.mp4';
import foto1 from '../assets/img/foto1.jpg';
import foto2 from '../assets/img/foto2.jpg';
import foto3 from '../assets/img/foto3.jpg';

function HomePage() {

	const photoRef = useRef();

	useEffect(() => {

		// gsap.to(photoRef.current, {scrollTrigger:{trigger:photoRef.current, start: "top bottom", end: "top center", scrub: true}, x: -500, duration: 2})
	})

    return (
        <section >
			<div className={styles.videoContent}>
			<video
				src={highlights}
				type="video/mp4"
				autoPlay
				muted
				loop
				className={styles.video}
			></video>
			</div>

			<div className={styles.textPrincipal}>
				<h2>“Nos dieron la libertad para elegir y elegimos ser los mejores.”</h2>
				<p>En CryptoHouse ejercimos nuestro poder de elección, y al hacerlo creamos una comunidad de valores
						compartidos. Ser sustentable y ético no siempre es el camino más fácil; sin embargo, hemos hecho un esfuerzo
						consciente para brindar seguridad y confianza a la hora de invertir en este cambiante mundo. Estos cambios
						producen problemas que nosotros buscamos solucionar con nuestros distintos servicios, como formulario
						K.Y.C., Web Marketing, Auditoria, entre otros.
				</p>
				<div className={styles.pictureContent} ref={photoRef}>
					<img className={styles.logo} src={foto1} alt="Marco de foto para los partners" />
					<img className={styles.logo} src={foto2} alt="Marco de foto para los partners" />
					<img className={styles.logo} src={foto3} alt="Marco de foto para los partners" />
				</div>
			</div>
		</section>
    );
}

export default HomePage;