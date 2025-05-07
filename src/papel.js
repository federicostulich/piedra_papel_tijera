'use-strict'

const Papel = function(){

    this.versus = (rival) => {
        return rival.comoTeVaContra("Papel");
    }


    this.comoTeVaContra = (manoRival) => {
        if(manoRival === "Papel"){
            return "Empate";
        }
        if(manoRival === "Tijera"){
            return "Victoria";
        }
        return "Derrota"
    }

}

module.exports = Papel;