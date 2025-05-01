'use-strict'

const Papel = function(){

    this.versus = (rival) => {
        return rival.comoTeVaContra("Papel");
    }


    this.comoTeVaContra = (manoRival) => {
        if(manoRival === "Papel"){
            return "Empate";
        }
        return "Derrota"
    }

}

module.exports = Papel;