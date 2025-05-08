'use-strict'

const Lagarto = function(){

    this.versus = (rival) => {
        return rival.resultadoDeLagartoContraMi()
    }

    this.resultadoDeLagartoContraMi = () => "Empate";

    this.resultadoDeTijeraContraMi = () => "Victoria";
}

module.exports = Lagarto;