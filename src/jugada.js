'use-strict'

const Jugada = function(mano){
    this.mano = mano;

    this.versus = (rival) => {
        return rival.comoTeVaContra(this.mano);
    }
    
}

module.exports = Jugada;