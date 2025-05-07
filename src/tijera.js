'use-strict'

const Tijera = function(){

    this.versus = (rival) => {
        return rival.resultadoDeManoRivalContraMi("Tijera");
    }
        

    this.resultadoDeManoRivalContraMi = (manoRival) => {
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