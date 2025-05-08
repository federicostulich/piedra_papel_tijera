'use-strict'

const Piedra = function(){

    this.versus = (rival) => {
        return rival.resultadoDePiedraContraMi();
    }

    this.resultadoDeTijeraContraMi = () => "Derrota";

    this.resultadoDePapelContraMi = () => "Victoria";

    this.resultadoDePiedraContraMi = () => "Empate";

}

module.exports = Piedra;