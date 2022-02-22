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
import Justluks from '../Equipo/Integrantes/Justluks'
import Chorchtawn from '../Equipo/Integrantes/Chorch'
import Kadi from '../Equipo/Integrantes/Kadi'
import Juanpold from '../Equipo/Integrantes/Juanpold'
import Jungle from '../Equipo/Integrantes/Jungle'
import Lucas from '../Equipo/Integrantes/Lucas'
import Pela from '../Equipo/Integrantes/Pela'
import Opy from '../Equipo/Integrantes/Opy'

const Home = () => {
    return (
        <div >
            <NavBar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/partners" element={<Partners />} />
                {/* <Route path="/comunidad" element={<Comunidad />} /> */}
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/nosotros/justluks" element={<Justluks />} />
                <Route path="/nosotros/chorchtawn" element={<Chorchtawn />} />
                <Route path="/nosotros/kadi" element={<Kadi />} />
                <Route path="/nosotros/jungle" element={<Jungle />} />
                <Route path="/nosotros/juanpold" element={<Juanpold />} />
                <Route path="/nosotros/lucasledesma" element={<Lucas />} />
                <Route path="/nosotros/opytha" element={<Opy />} />
                <Route path="/nosotros/emanuelcorrea" element={<Pela />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/servicios/formularioKYC" element={<Servicios />} />
                <Route path="/servicios/marketingWEB" element={<Servicios />} />
                <Route path="/servicios/auditoria" element={<Servicios />} />
                <Route path="/servicios/CEO-influencers" element={<Servicios />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
            <Footer />

        </div>
    );
};

export default Home