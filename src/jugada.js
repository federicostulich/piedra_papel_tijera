'use-strict'

const Tijera = require("./tijera");

const Jugada = function(mano){
    this.mano = mano;

    this.versus = (rival) => {
        return rival.comoTeVaContra(this.mano);
    }

    this.comoTeVaContra = (manoRival) => {
        if(manoRival === "Papel"){
            return "Empate";
        }
    }
    
}

module.exports = Jugada;