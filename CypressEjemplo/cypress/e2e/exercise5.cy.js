
    describe('Prueba de YouTube', function () {
      it('Realiza varias interacciones en YouTube', function () {
        // Visita la página de inicio de YouTube.
        cy.visit('https://www.youtube.com/');   //abre el navegador y visita la página de inicio de YouTube en la URL proporcionada.
    
        // Realiza una búsqueda.
        cy.get('input[name="search_query"]')
        .type('Cypress testing{enter}');  //busca un campo de entrada de búsqueda en YouTube por su atributo name (que es "search_query") y escribe "Cypress testing" en él. Luego, presiona la tecla "Enter" ({enter}) para iniciar la búsqueda.
        // Espera a que los resultados de búsqueda se carguen (puedes ajustar el tiempo de espera según sea necesario).
        cy.get('#contents ytd-video-renderer')
        .should('have.length.greaterThan', 0);      //espera a que los resultados de búsqueda se carguen. Esta línea verifica que haya al menos un resultado de video en la página (ytd-video-renderer). Si no se encuentra ningún resultado, la prueba fallará. Puedes ajustar el tiempo de espera si es necesario.
    
        // Hace clic en el primer video de los resultados de búsqueda.
        cy.get('#contents ytd-video-renderer:first-child a#thumbnail')
        .click();   //encuentra el enlace (a#thumbnail) del primer video de los resultados de búsqueda y hace clic en él.
    
         // Verifica que el video se haya cargado.
        cy.url().should('include', '/watch');    // verifica que la URL actual incluye "/watch", lo que indica que hemos navegado a la página de visualización de un video. Esto confirma que el video se ha cargado correctamente.
    
        // Pausa el video.
        cy.get('video').click();  // encuentra el elemento de video en la página y hace clic en él para pausar el video.
    /*  
        // Espera un momento.
        cy.wait(20000);     // pausa la ejecución de la prueba durante 2 segundos para dar tiempo al video
    
        // Reanuda el video.
        cy.get('video').click();
    
        // Espera un momento.
        cy.wait(20000);
    
        // Hace clic en el botón de pantalla completa.
        cy.get('.ytp-fullscreen-button').click(); //encuentra el botón de pantalla completa en el reproductor de video y hace clic en él para activar el modo de pantalla completa.
    
        // Espera un momento.
        cy.wait(2000);
    
        // Sale del modo de pantalla completa.
        cy.get('.ytp-fullscreen-button').click();
    
        // Espera un momento.
        cy.wait(2000); */
    
      });
    });
    