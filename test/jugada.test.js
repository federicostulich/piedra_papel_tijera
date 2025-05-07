'use-strict'

const Tijera = require("../src/tijera");
const Piedra = require("../src/piedra");
const Papel = require("../src/papel");

test("El resultado de piedra contra piedra es empate.", ()=>{
    // setup
    const piedra1 = new Piedra();
    const piedra2 = new Piedra();

    // exercise
    const resultado = piedra1.versus(piedra2);
    
    // assert
    expect(resultado).toBe("Empate");
})

test("El resultado de piedra contra tijera es victoria.", ()=>{
    // setup
    const piedra = new Piedra();
    const tijera = new Tijera();

    // exercise
    const resultado = piedra.versus(tijera);
    
    // assert
    expect(resultado).toBe("Victoria");
})

test("El resultado de piedra contra papel es derrota.", ()=>{
    // setup
    const piedra = new Piedra();
    const papel = new Papel();

    // exercise
    const resultado = piedra.versus(papel);
    
    // assert
    expect(resultado).toBe("Derrota");
})


test("El resultado de papel contra papel es empate.", ()=>{
    // setup
    const papel1 = new Papel()
    const papel2 = new Papel();

    // exercise
    const resultado = papel1.versus(papel2);
    
    // assert
    expect(resultado).toBe("Empate");
})

test("El resultado de papel contra tijera es derrota.", ()=>{
    // setup
    const papel = new Papel()
    const tijera = new Tijera();

    // exercise
    const resultado = papel.versus(tijera);
    
    // assert
    expect(resultado).toBe("Derrota");
})

test("El resultado de papel cuando esta mojado contra piedra es victoria.", ()=>{
    // setup
    const papel = new Papel()
    const piedra = new Piedra();

    // exercise
    const resultado = papel.versus(piedra);
    
    // assert
    expect(papel.versus(piedra)).toBe("Victoria");
})