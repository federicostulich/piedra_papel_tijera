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
            // return "Derrota";
            return rival.comoTeVaContra("Piedra");
        }
        return "Empate";
    }

    this.comoTeVaContra = () => {
        if(this.mano === "Papel"){
            return "Derrota";
        }
        return "Victoria";
    }
    
}

module.exports = Jugada;