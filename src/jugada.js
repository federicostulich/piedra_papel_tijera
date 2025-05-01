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
        if(manoRival === "Piedra"){
            if(this.mano === "Papel"){
                return "Derrota";
            }
            if(this.mano === "Piedra"){
                return "Empate";
            }
        }
    }
    
}

module.exports = Jugada;