import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HowItWork from "./components/HowItWork/HowItWork";
import {HeaderJS} from "./js/main";
import store from "./components/redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import EditMainBlockContainer from "./components/Edit/EditMainBlock/EditMainBlockContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Prices from "./components/Prices/Prices";
import Designs from "./components/Designs/Designs";
import Certificate from "./components/Certificate/Certificate";
import Reviews from "./components/Reviews/Reviews";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Page404 from "./components/Page404/Page404";
import Registration from "./components/Registration/Registration";
import Features from "./components/Features/Features";

function App() {
    useEffect(() => {
        HeaderJS();
    });
    return (
        <div className="App">

                <Header/>
            <Switch>
                <Route path="/sign" render={() => <LoginForm />}/>
                <Route path="/registration" render={() => <Registration />}/>
                <Route path="/password-reset" render={() => <PasswordReset />}/>
                <Route exact path="/" render={() =>
                <div>
                    <Main/>
                    <Features />
                    <HowItWork/>
                    <Designs/>
                    {/*<Prices/>*/}
                    {/*<Certificate />*/}
                    {/*<Reviews/>*/}
                    {/*<Faq/>*/}
                    {/*<Footer/>*/}
                </div>}/>
                <Route path="*" render={() => <Page404 />}/>
            </Switch>

        </div>
    );
}

const AppContainer = () => {
    return <BrowserRouter basename="/thefamily">
        {/*нужен для react-redux. Provider прокидывает store внутрь для всех компонет для его доступности,
         так прокидываются только глобал вещи, напр: язык сайта, тема (черная, светлая)*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}

export default AppContainer;


