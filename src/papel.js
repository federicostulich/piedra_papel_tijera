'use-strict'

const Tijera = require("./tijera");

const Papel = function(){

    this.versus = (rival) => {
        return rival.resultadoDeManoRivalContraMi("Papel");
    }


    this.resultadoDeManoRivalContraMi = (manoRival) => {
        if(manoRival === "Papel"){
            return "Empate";
        }
        return "Derrota"
    }

    this.resultadoDeTijeraContraMi = () => "Victoria";

}

module.exports = Papel;