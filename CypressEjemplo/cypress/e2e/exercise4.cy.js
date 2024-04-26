describe('Cypress exercises - Operaciones con listas númericas', () => {
  it('pasrealizar operaciones matemáticas con una lista de números', () => {
    // Lista de números proporcionados
    const listaNumeros = [10, 5, 8, 12, 4];
    // calcular la suma de los números en la lista
    let suma  = 0;
    for(let numero of listaNumeros){
      suma +=numero; 
    }
    // calcular  el producto de los núumeros en la lista
    let producto = 1;
    for(let numero of listaNumeros){
      producto *= numero
    }
    // calcular el promedio de los números en la lista
    let promedio = suma / listaNumeros.length;
    // encontrar el número mínimo y máximo en la lista
    let minimo = Math.min(...listaNumeros);
    let maximo = Math.max(...listaNumeros);
    // Mostrar los resultados en la consola de Cypress
    cy.log(`Lista de números: ${listaNumeros}`);
    cy.log(`Suma: ${suma}`);
    cy.log(`Producto: ${producto}`);
    cy.log(`Promedio: ${promedio}`);
    cy.log(`Mínimo: ${minimo}`);
    cy.log(`Máximo: ${maximo}`);
    // Verificar los resultados utilizando las aserciones de cypress
    cy.wrap(suma).should('eq', 39);             // 39
    cy.wrap(producto).should('eq', 19200);      // 19200
    cy.wrap(promedio).should('eq', 7.8);        // 7.8
    cy.wrap(minimo).should('eq', 4);            // 4
    cy.wrap(maximo).should('eq', 15);           // 12
  })
})