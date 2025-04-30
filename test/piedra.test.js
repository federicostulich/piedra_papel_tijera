"use-strict"

const Jugada = require("../src/jugada");

test("El resultado de piedra contra piedra es empate.", ()=>{
    // setup
    const piedra1 = new Jugada("Piedra");
    const piedra2 = new Jugada("Piedra");

    // exercise
    const resultado = piedra1.versus(piedra2);
    
    // assert
    expect(resultado).toBe("Empate"); //0
})

test("El resultado de piedra contra tijera es empate.", ()=>{
    // setup
    const piedra = new Jugada("Piedra");
    const tijera = new Jugada("Tijera");

    // exercise
    const resultado = piedra.versus(tijera);
    
    // assert
    expect(resultado).toBe("Victoria"); //0
})