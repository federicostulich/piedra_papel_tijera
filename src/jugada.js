'use-strict'

const Jugada = function(mano){
    this.mano = mano;

    this.versus = (rival) => {
        if(rival.mano === "Tijera"){
            // return "Victoria";
            // return rival.comoTeVaContraPiedra();
            return rival.comoTeVaContra("Piedra");
        }
        if(rival.mano === "Papel"){
            return "Derrota";
        }
        return "Empate";
    }

    this.comoTeVaContra = () => "Victoria";
}

module.exports = Jugada;