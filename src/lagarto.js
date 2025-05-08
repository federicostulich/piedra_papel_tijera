'use-strict'

const Lagarto = function(){

    this.versus = (rival) => {
        return rival.resultadoDeLagartoContraMi()
    }

    this.resultadoDeLagartoContraMi = () => "Empate";
}

module.exports = Lagarto;