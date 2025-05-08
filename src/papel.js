'use-strict'

const Papel = function(){

    this.versus = (rival) => {
        return rival.resultadoDePapelContraMi();
    }

    this.resultadoDeTijeraContraMi = () => "Victoria";

    this.resultadoDePapelContraMi = () => "Empate";

    this.resultadoDePiedraContraMi = () => "Derrota";

    this.resultadoDeLagartoContraMi = () => "Victoria";

    this.resultadoDeSpockContraMi = () => "Derrota";

}

module.exports = Papel;