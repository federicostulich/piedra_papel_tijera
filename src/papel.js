'use-strict'

const Papel = function(){

    this.versus = (rival) => {
        return rival.resultadoDeManoRivalContraMi("Papel");
    }


    this.resultadoDeManoRivalContraMi = (manoRival) => {
        if(manoRival === "Papel"){
            return "Empate";
        }
        if(manoRival === "Tijera"){
            return "Victoria";
        }
        return "Derrota"
    }

}

module.exports = Papel;