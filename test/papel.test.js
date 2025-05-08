'use-strict'

const Tijera = require("../src/tijera");
const Piedra = require("../src/piedra");
const Papel = require("../src/papel");
const Lagarto = require("../src/lagarto");
const Spock = require("../src/spock");

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

test("El resultado de papel contra piedra es victoria.", ()=>{
    // setup
    const papel = new Papel()
    const piedra = new Piedra();

    // exercise
    const resultado = papel.versus(piedra);
    
    // assert
    expect(resultado).toBe("Victoria");
})

test("El resultado de papel contra lagarto es derrota.", ()=>{
    const papel = new Papel();
    const lagarto = new Lagarto();
    
    expect(papel.versus(lagarto)).toBe("Derrota");
})

test("El resultado de papel contra spock es victoria.", ()=>{
    const papel = new Papel();
    const spock = new Spock();
    
    expect(papel.versus(spock)).toBe("Victoria");
})