import React from "react";
import s from "./Languages.module.css";

function Languages({changeLanguage}) {

    function handleButtonClick(lang) {
       changeLanguage(lang);
    }

    return (
       <section className={s.languages}>
           <div onClick={()=>handleButtonClick("en")}><a href="">English</a></div>
           <div onClick={()=>handleButtonClick("uk")}><a href="">Українська</a></div>
           <div onClick={()=>handleButtonClick("ru")}><a href="">Русский</a></div>
       </section>
    )
}




export default Languages;