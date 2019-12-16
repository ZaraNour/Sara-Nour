# InstaBug Challenge

This file includes the brief and steps for each part. 

## Part 1: Creating a test plan for MyFitnessPal mobile application

Here is the [link](https://docs.google.com/document/d/1wld8rsUg_pxtCeaTKHLTFpGi38-EitlY1WiKJrCNNKE/edit?usp=sharing) For Test paln.

This [link](https://docs.google.com/spreadsheets/d/1gtJfSpZ45zgwrT9gnysz6mc4Dgdu0mxt_KwNObvyRmQ/edit?usp=sharing) for Test cases.


## Part 2: Bugs
This [Link](https://docs.google.com/spreadsheets/d/1pVq9p5giSmL0kiQcfUtKyEsGPg5Gf0WLgCx5TijAMSM/edit?usp=sharing) for Bugs.

## Part 3: Automated tests for facebook registration and login scenarios.

I used Cypress, it's a complete end-to-end automation framework, using Javascript.
### Cypress Installation 

-  setup Editor.  
    EX: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
   
-   NodeJS Install for Installing NPM Package .  
    From: [https://nodejs.org/en/](https://nodejs.org/en/)
    
-   Make a new Directory named “Cypress” .
    
-   Run the npm command on CMD.  
    npm install cypress --save-dev-g
    
-   Add the Package.JSON to your project by running Command.  
    npm init
    -----------
    For Execute  Test cases after setup Cypress
1- open Cypress folder  
2- open integration folder on visual studio code
3-   Run "node_modules\.bin\cypress open" command
4-  run test Facebook registration and login scenarios from tests on cypress tool
    
------------------


## Part 4: Automated tests for Best Buy APIs.
### Used tool:
- Setup postman environment and collections for Endpoints.
- Javascrip language 

### A steps for test cases on postman.

### Products / Stores API

1.  From Collection Select Entity / Request    
2.  Set API Method (GET/PUT/POST/DELETE).
3.  Add URL 
4. On Header Tab, Add Attributes and values
5.  Create test script on test tab
6.  Click on Send Button
7. 8 check test result from response 

### List of  Test cases:
1- Create product 
2- Get all products
3- Get one product
4- Update Product
5- Delete Product
6- Create store
7- Get all stores
8- Get one store
9- Update Store
10- Delete Store

