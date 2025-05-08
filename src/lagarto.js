'use-strict'

const Lagarto = function(){

    this.versus = (rival) => {
        return rival.resultadoDeLagartoContraMi()
    }

    this.resultadoDeLagartoContraMi = () => "Empate";

    this.resultadoDeTijeraContraMi = () => "Victoria";

    this.resultadoDePapelContraMi = () => "Derrota";

    this.resultadoDePiedraContraMi = () => "Victoria";

    this.resultadoDeSpockContraMi = () => "Derrota";

}

module.exports = Lagarto;