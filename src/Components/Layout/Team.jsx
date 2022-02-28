import React from 'react';
import { Navigate,Route, Routes } from 'react-router-dom';
import '../../Styles/global.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Nosotros from '../../Pages/Nosotros';
import Justluks from '../Equipo/Integrantes/Justluks';
import Chorchtawn from '../Equipo/Integrantes/Chorch';
import Kadi from '../Equipo/Integrantes/Kadi';
import Juanpold from '../Equipo/Integrantes/Juanpold';
import Jungle from '../Equipo/Integrantes/Jungle';
import Lucas from '../Equipo/Integrantes/Lucas';
import Pela from '../Equipo/Integrantes/Pela';
import Opy from '../Equipo/Integrantes/Opy';

const Home = () => {
    return (
        <div >
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Nosotros />} />
                <Route exact path="/justluks" element={<Justluks />} />
                <Route exact path="/chorchtawn" element={<Chorchtawn />} />
                <Route exact path="/kadi" element={<Kadi />} />
                <Route exact path="/jungle" element={<Jungle />} />
                <Route exact path="/juanpold" element={<Juanpold />} />
                <Route exact path="/lucasledesma" element={<Lucas />} />
                <Route exact path="/opytha" element={<Opy />} />
                <Route exact path="/emanuelcorrea" element={<Pela />} />
                <Route exact path='*' element={<Navigate to="/" />} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default Home