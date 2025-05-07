'use-strict'

const Tijera = function(){

    this.versus = (rival) => {
        return rival.resultadoDeTijeraContraMi()
        // return rival.resultadoDeManoRivalContraMi(this);
        // return rival.resultadoDeManoRivalContraMi("Tijera");
    }

    this.resultadoDeManoRivalContraMi = (manoRival) => {
        if(manoRival === "Papel"){
            return "Derrota";
        }
        return "Victoria";
    }

    this.resultadoDeTijeraContraMi = () => "Empate";

    // this.resultadoContraTijera = () => "Empate";

    // this.resultadoContraPapel = () => "Victoria";

}

module.exports = Tijera;