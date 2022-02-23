import React from 'react';
import { Navigate,Route, Routes } from 'react-router-dom';
import '../../Styles/global.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import HomePage from '../../Pages/HomePage';
import Certificados from '../../Pages/Certificados';
import Partners from '../../Pages/Partners';
import Nosotros from '../../Pages/Nosotros';
import Servicios from '../../Pages/Servicios';
import Justluks from '../Equipo/Integrantes/Justluks';
import Chorchtawn from '../Equipo/Integrantes/Chorch';
import Kadi from '../Equipo/Integrantes/Kadi';
import Juanpold from '../Equipo/Integrantes/Juanpold';
import Jungle from '../Equipo/Integrantes/Jungle';
import Lucas from '../Equipo/Integrantes/Lucas';
import Pela from '../Equipo/Integrantes/Pela';
import Opy from '../Equipo/Integrantes/Opy';
import Auditoria from '../Servicios/Auditoria';
import Kyc from '../Servicios/Kyc';
import Seo from '../Servicios/Seo';
import Marketing from '../Servicios/Marketing';
import Cryptonite from '../Certificados/Cryptonite';
import Dow from '../Certificados/Destinyofwar';
import Indi from '../Certificados/Indigslegend';
import Poa from '../Certificados/Pathofalchemist';
import Potion from '../Certificados/Potionseller';
import Wos from '../Certificados/Worldofswords';
import Cryptoone from '../Certificados/Cryptoone';

const Home = () => {
    return (
        <div >
            <NavBar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/partners" element={<Partners />} />
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
                <Route path="/servicios/formularioKYC" element={<Kyc />} />
                <Route path="/servicios/marketingWEB" element={<Marketing />} />
                <Route path="/servicios/auditoria" element={<Auditoria />} />
                <Route path="/servicios/SEOinfluencers" element={<Seo />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/certificados/KYC-Cryptonite" element={<Cryptonite />} />
                <Route path="/certificados/KYC-PathOfAlchemist" element={<Poa />} />
                <Route path="/certificados/KYC-PotionSeller" element={<Potion />} />
                <Route path="/certificados/KYC-CryptoOne" element={<Cryptoone />} />
                <Route path="/certificados/KYC-DestinyOfWar" element={<Dow />} />
                <Route path="/certificados/KYC-IndigsLegend" element={<Indi />} />
                <Route path="/certificados/KYC-WorldOfSwords" element={<Wos />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
            <Footer />

        </div>
    );
};

export default Home