'use-strict'

const Jugada = function(mano){
    this.mano = mano;

    this.versus = (rival) => {
        // return rival.comoTeVaContraPiedra();
        if(this.mano === "Papel"){
            return rival.comoTeVaContra("Papel");
        }
        return rival.comoTeVaContra("Piedra");
    }

    this.comoTeVaContra = (manoRival) => {
        if(manoRival === "Papel"){
            if(this.mano === "Tijera"){
                return "Derrota";
            }
            return "Empate";
        }
        if(this.mano === "Papel"){
            return "Derrota";
        }
        if(this.mano === "Piedra"){
            return "Empate";
        }
        return "Victoria";
    }
    
}

module.exports = Jugada;