'use-strict'

const Jugada = function(mano){
    this.mano = mano;

    this.versus = (rival) => {
        if(rival.mano === "Tijera"){
            return "Victoria";
        }
        if(rival.mano === "Papel"){
            return "Derrota";
        }
        return "Empate";
    }
}

module.exports = Jugada;