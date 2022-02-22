import React from 'react'
import { Navigate,Route, Routes } from 'react-router-dom'
import '../../Styles/global.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import HomePage from '../../Pages/HomePage'
import Certificados from '../../Pages/Certificados'
import Partners from '../../Pages/Partners'
// import Comunidad from '../../Pages/Servicios'
import Nosotros from '../../Pages/Nosotros'
import Servicios from '../../Pages/Servicios'
import criptoTune from '../../assets/audio/criptoTune.mp3'

const Home = () => {
    return (
        <div >
            <audio autoplay controls loop>
                <source src={criptoTune} type="audio/mpeg" />
                <source src="/resources/Cripto Tune.wav" type="audio/wav" />
		    </audio>
            <NavBar />
            <Routes className='mainContainer'>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/partners" element={<Partners />} />
                {/* <Route path="/comunidad" element={<Comunidad />} /> */}
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />

                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
            <Footer />

        </div>
    );
};

export default Home