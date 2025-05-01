'use-strict'

const Jugada = function(mano){
    this.mano = mano;

    this.versus = (rival) => {
        // return rival.comoTeVaContraPiedra();
        return rival.comoTeVaContra("Piedra");
    }

    this.comoTeVaContra = () => {
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