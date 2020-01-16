import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import HowItWork from "./components/HowItWork/HowItWork";
import Designs from "./components/Designs/Designs";
import Prices from "./components/Prices/Prices";
import Reviews from "./components/Reviews/Reviews";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Certificate from "./components/Certificate/Certificate";
import {BackgroundRed} from "./js/main";

function App() {
    useEffect(() => {
        BackgroundRed();
    });
    return (
        <div className="App">
                <Header/>
                <Main/>
                <Features/>
                <HowItWork/>
                <Designs/>
                <Prices/>
                <Certificate/>
                <Reviews/>
                <Faq/>
                <Footer/>
        </div>
    );

}

export default App;
