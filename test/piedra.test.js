"use-strict"

test("", ()=>{
    // setup
    const piedra1 = new Jugada("Piedra");
    const piedra2 = new Jugada("Piedra");

    // exercise
    const resultado = piedra1.versus(piedra2);
    
    // assert
    expect(resultado).toBe("Empate"); //0
})