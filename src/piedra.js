'use-strict'

const Piedra = function(){

    this.versus = (rival) => {
        return rival.resultadoDePiedraContraMi();
    }

    this.resultadoDeTijeraContraMi = () => "Derrota";

    this.resultadoDePapelContraMi = () => "Victoria";

    this.resultadoDePiedraContraMi = () => "Empate";

    this.resultadoDeLagartoContraMi = () => "Derrota";

    this.resultadoDeSpockContraMi = () => "Victoria";

}

module.exports = Piedra;