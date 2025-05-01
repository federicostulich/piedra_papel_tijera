'use-strict'

const Tijera = function(){

    this.comoTeVaContra = (manoRival) => {
        if(manoRival === "Papel"){
            return "Derrota";
        }
        return "Victoria";
    }

}

module.exports = Tijera;