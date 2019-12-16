                describe('Login with valid data', function() {
                    it('successfully loads', function() {
                      cy.visit('https://www.facebook.com') 
                      cy.get('[data-testid=royal_email]').type('jlxjgcvslk_1576442273@tfbnw.net');
                      cy.get('[data-testid=royal_pass]').type('S@r@123');
                      cy.get('[data-testid=royal_login_button]').click()
                      cy.url().should('include','https://www.facebook.com');
                      cy.get('#userNavigationLabel').click()
                      cy.get('._64kz > ._54nc > :nth-child(1) > ._54nh').click()
                      cy.url().should('include','https://www.facebook.com');

                    })
                    })
                    

                    describe('Login with invalid email', function() {
                        it('successfully loads', function() {
                          cy.visit('https://www.facebook.com') 
                          cy.get('[data-testid=royal_email]').type('zl43');
                          cy.get('[data-testid=royal_pass]').type('S@r@123');
                          cy.get('[data-testid=royal_login_button]').click()
                          //cy.get('#email'), ('jlxjgcvslk_1576442273@tfbnw.net');
                          cy.get('#email').should('match',' valid email!');
                          
                        })
                        })
                        
                        describe('Login with invalid password', function() {
                            it('successfully loads', function() {
                              cy.visit('https://www.facebook.com') 
                              cy.get('[data-testid=royal_email]').type('jlxjgcvslk_1576442273@tfbnw.net');
                              cy.get('[data-testid=royal_pass]').type('S@r@');
                              cy.get('[data-testid=royal_login_button]').click()
                              
                            })
                            })
                            
                            describe('Login empty state', function() {
                                it('successfully loads', function() {
                                  cy.visit('https://www.facebook.com') 
                                  cy.get('[data-testid=royal_email]').type('');
                                  cy.get('[data-testid=royal_pass]').type('');
                                  cy.get('[data-testid=royal_login_button]').click()
                                  
                                })
                                })
                    