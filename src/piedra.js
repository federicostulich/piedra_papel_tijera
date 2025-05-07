'use-strict'

const Tijera = require("./tijera")

const Piedra = function(){

    this.versus = (rival) => {
        return rival.resultadoDeManoRivalContraMi("Piedra");
    }

    this.resultadoDeManoRivalContraMi = (manoRival) => {
        if(manoRival==="Papel"){
            return "Victoria";
        }
        return "Empate";
    }

    this.resultadoDeTijeraContraMi = () => "Derrota"

}

module.exports = Piedra;