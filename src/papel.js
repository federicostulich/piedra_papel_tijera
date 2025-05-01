'use-strict'

const Papel = function(){

    this.comoTeVaContra = (manoRival) => {
        if(manoRival === "Papel"){
            return "Empate";
        }
        return "Derrota"
    }

}

module.exports = Papel;