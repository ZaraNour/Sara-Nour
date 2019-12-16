

      describe('Registeration Page happy scenario', function() {
            it('successfully loads', function() {
              cy.visit('https://www.facebook.com/') 
              cy.get('#u_0_m').type('Sara');
              cy.get('#u_0_o').type('Nour');
              cy.get('#u_0_r').type('iyusbxlvmx_1576448490@tfbnw.net');
              cy.get('#u_0_u').type('iyusbxlvmx_1576448490@tfbnw.net');
              cy.get('#u_0_w').type('Test@123');
              cy.get('#day').select('26');
              cy.get('#month').select('7');
              cy.get('#year').select('1993');
              cy.get(':nth-child(1) > ._58mt').type('u_0_z>:nth-child(1)');
              cy.get('#u_0_13').click()        
            })
          }) 


          describe('FB Registeration Page Negative Scenario -Email field is empty ', function() {
              cy.visit('https://www.facebook.com/') 
              cy.get('#u_0_m').type('test');
              cy.get('#u_0_o').type('Nour');
              //cy.get('#u_0_r').type('jlxjgcvslk_1576442273@tfbnw.net');
             //Email field is empty
              cy.get('#u_0_w').type('S@r@123'); 
              cy.get('#day').select('7');
              cy.get('#month').select('7');
              cy.get('#year').select('1990');
              cy.get(':nth-child(1) > ._58mt').type('u_0_z>:nth-child(1)');
              cy.get('#u_0_13').click()
              cy.get('#u_0_u').should('have.value','jlxjgcvslk_1576442273@tfbnw.net');

            })
        


            describe('Fb Registeration Page happy scenario', function() {
            it('successfully loads', function() {
              cy.visit('https://www.facebook.com/') 
              cy.get('#u_0_m').type('Sara');
              cy.get('#u_0_o').type('Nour');
              cy.get('#u_0_r').type('iyusbxlvmx_1576448490@tfbnw.net');
              cy.get('#u_0_u').type('iyusbxlvmx_1576448490@tfbnw.net');
              cy.get('#u_0_w').type('Test@123');
              cy.get('#day').select('26');
              cy.get('#month').select('7');
              cy.get('#year').select('1993');
              cy.get('#u_0_13').click()        
            })
          }) 
            describe('Registeration Page Negative Scenario 2 -  gender not selected', function() {
                it('successfully loads', function() {
                    cy.visit('https://www.facebook.com/') 
                    cy.get('#u_0_m').type('test');
                    cy.get('#u_0_o').type('Nour');
                    cy.get('#u_0_r').type('dyicofjqio_1576433501@tfbnw.net');
                    cy.get('#u_0_u').type('dyicofjqio_1576433501@tfbnw.net'); 
                    cy.get('#u_0_w').type('S@r@123'); 
                    cy.get('#day').select('7');
                    cy.get('#month').select('7');
                    cy.get('#year').select('1996');
                 // cy.get(':nth-child(2) > ._58mt').type('u_0_z>:nth-child(1)');
                  cy.get('#u_0_13').click()
                  cy.get(':nth-child(1) > ._58mt').should('be.checked');
                })
                })
    
                