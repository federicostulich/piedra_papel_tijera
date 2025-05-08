'use-strict'

const Spock = function(){

    this.versus = (rival) => {
        return rival.resultadoDeSpockContraMi();
    }

    this.resultadoDeSpockContraMi = () => "Empate";

    this.resultadoDeLagartoContraMi = () => "Victoria";

    this.resultadoDeTijeraContraMi = () => "Derrota";

    this.resultadoDePapelContraMi = () => "Victoria";

    this.resultadoDePiedraContraMi = () => "Derrota";
}

module.exports = Spock;