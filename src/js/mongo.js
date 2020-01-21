const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/thefamily")
    .then( () => console.log("MongoDB has started...") )
    .catch( e => console.log("Ошибка: " + e))