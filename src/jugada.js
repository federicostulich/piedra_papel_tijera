"use-strict"

const Jugada = function(mano){
    this.mano = mano;
    
    this.versus = (rival) => {
        if(rival.mano === "Tijera"){
            return "Victoria";
        }
        return "Empate"
    }
}

module.exports = Jugada;