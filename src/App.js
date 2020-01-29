import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/MainContainer";
import HowItWork from "./components/HowItWork/HowItWork";
import Designs from "./components/Designs/Designs";
import Prices from "./components/Prices/Prices";
import Reviews from "./components/Reviews/Reviews";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Certificate from "./components/Certificate/Certificate";
import {BackgroundRed} from "./js/main";
import store from "./components/redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import EditMainBlockContainer from "./components/Edit/EditMainBlock/EditMainBlockContainer";
import {setEditMode} from "./components/redux/Landing-reducer";
import FeaturesContainer from "./components/Features/FeaturesContainer";

function App() {
    useEffect(() => {
        BackgroundRed();
    });
    return (
        <div className="App">
            <Switch>
                <Route path="/edit" render={() =>
                    <div>
                        <SetEditMode/>
                        <Header/>
                        <EditMainBlockContainer/>
                    </div>}/>
                <div>
                    <Header/>
                    <Main/>
                    <FeaturesContainer />
                    <HowItWork/>
                    <Designs/>
                    <Prices/>
                    <Certificate />
                    <Reviews/>
                    <Faq/>
                    <Footer/>
                </div>
            </Switch>

        </div>
    );
}

const AppContainer = () => {
    return <BrowserRouter>
        {/*нужен для react-redux. Provider прокидывает store внутрь для всех компонет для его доступности,
         так прокидываются только глобал вещи, напр: язык сайта, тема (черная, светлая)*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}

export default AppContainer;


function SetEditMode() {
    setEditMode();
    return (
        <div className="editModeText">You are in Edit Mode</div>
    )
}
