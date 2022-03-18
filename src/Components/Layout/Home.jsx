import React from 'react';
import { Navigate,Route, Routes } from 'react-router-dom';
import '../../Styles/global.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import HomePage from '../../Pages/HomePage';
import Certificados from '../../Pages/Certificados';
import Partners from '../../Pages/Partners';
import Servicios from '../../Pages/Servicios';
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
import Ingenious from '../Certificados/Ingeniousminer';
import Loxar from '../Certificados/Loxar';
import Chia from '../Certificados/Chiatk';
import Defi from '../Certificados/Defidiceplay';

const Home = () => {
    return (
        <div >
            <NavBar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/partners" element={<Partners />} />
                <Route exact path="/servicios" element={<Servicios />} />
                <Route exact path="/servicios/formularioKYC" element={<Kyc />} />
                <Route exact path="/servicios/marketingWEB" element={<Marketing />} />
                <Route exact path="/servicios/auditoria" element={<Auditoria />} />
                <Route exact path="/servicios/SEOinfluencers" element={<Seo />} />
                <Route exact path="/certificados" element={<Certificados />} />
                <Route exact path="/certificados/KYC-Cryptonite" element={<Cryptonite />} />
                <Route exact path="/certificados/KYC-PathOfAlchemist" element={<Poa />} />
                <Route exact path="/certificados/KYC-PotionSeller" element={<Potion />} />
                <Route exact path="/certificados/KYC-CryptoOne" element={<Cryptoone />} />
                <Route exact path="/certificados/KYC-DestinyOfWar" element={<Dow />} />
                <Route exact path="/certificados/KYC-IndigsLegend" element={<Indi />} />
                <Route exact path="/certificados/KYC-WorldOfSwords" element={<Wos />} />
                <Route exact path="/certificados/KYC-IngeniousMiner" element={<Ingenious />} />
                <Route exact path="/certificados/KYC-Loxar" element={<Loxar />} />
                <Route exact path="/certificados/KYC-ChiaTK" element={<Chia />} />
                <Route exact path="/certificados/KYC-DefiDicePlay" element={<Defi />} />
                <Route exact path='*' element={<Navigate to="/" />} />
            </Routes>
            <Footer />

        </div>
    );
};

export default Home