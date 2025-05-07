'use-strict'

const Piedra = function(){

    this.versus = (rival) => {
        return rival.resultadoDeManoRivalContraMi("Piedra");
    }

    this.resultadoDeManoRivalContraMi = (manoRival) => {
        if(manoRival==="Papel"){
            return "Victoria";
        }
        if(manoRival === "Tijera"){
            return "Derrota";
        }
        return "Empate";
    }

}

module.exports = Piedra;