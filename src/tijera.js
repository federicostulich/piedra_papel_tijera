'use-strict'

const Tijera = function(){

    this.versus = (rival) => {
        return rival.resultadoDeTijeraContraMi();
    }

    this.resultadoDeTijeraContraMi = () => "Empate";

    this.resultadoDePapelContraMi = () => "Derrota";

    this.resultadoDePiedraContraMi = () => "Victoria";

    this.resultadoDeLagartoContraMi = () => "Derrota";

    this.resultadoDeSpockContraMi = () => "Victoria";

}

module.exports = Tijera;