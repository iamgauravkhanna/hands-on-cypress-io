// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {

    it('Visits the ToolsQA Demo Page and check the menu items', function () {

        //Visit the Demo QA Website
        cy.visit("https://demoqa.com/");

        // Clicking on Widget Menu Item 
        cy.get('#menu-top > li:nth-child(3) > a').click();

        //Verify number of items present on Widget Tab
        cy.get('.demo-frame > ul > li').should('have.length', 20);

        console.log('Using Mocha Log');
        cy.log('Using Cypress Log');
    
    })
})