import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ComponentLibrary from './components/ComponentLibrary';
import Register from './components/Register';
import Login from './components/Login';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const MainContent = styled.div`
    display: flex;
    flex: 1;
`;

const App: React.FC = () => {
    return (
        <Router>
            <AppContainer>
                <Header />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<Canvas />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    <Sidebar />
                    <ComponentLibrary />
                </MainContent>
            </AppContainer>
        </Router>
    );
};

export default App;