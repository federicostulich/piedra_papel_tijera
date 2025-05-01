'use-strict'

const Piedra = function(){

    this.versus = (rival) => {
        return rival.comoTeVaContra("Piedra");
    }

    this.comoTeVaContra = (manoRival) => {
        return "Empate";
    }

}

module.exports = Piedra;