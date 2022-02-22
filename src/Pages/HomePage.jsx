import React from 'react';
import styles from '../Styles/HomePage.module.css';
import highlights from '../assets/video/cryptohouseTeaser.mp4';

function HomePage() {
    return (
        <section className={styles.videoContent}>
			<video
				src={highlights}
				type="video/mp4"
				autoPlay
				muted
				loop
				className={styles.video}
			></video>
		</section>
    );
}

export default HomePage;