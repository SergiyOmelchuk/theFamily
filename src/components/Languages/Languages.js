import React from "react";


function Languages({changeLanguage}) {

    function handleButtonClick(lang) {
       changeLanguage(lang);
    }

    return (
       <div>
           <button onClick={()=>handleButtonClick("en")}>En</button>
           <button onClick={()=>handleButtonClick("uk")}>Uk</button>
           <button onClick={()=>handleButtonClick("ru")}>Ru</button>
       </div>
    )
}




export default Languages;