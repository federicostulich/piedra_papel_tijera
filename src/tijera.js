'use-strict'

const Tijera = function(){

    this.versus = (rival) => {
        return rival.comoTeVaContra("Tijera");
        // return "Empate";
    }
        

    this.comoTeVaContra = (manoRival) => {
        if(manoRival === "Papel"){
            return "Derrota";
        }
        if(manoRival === "Tijera"){
            return "Empate";
        }
        return "Victoria";
    }

}

module.exports = Tijera;