/// <reference types="cypress" />

import { LoginPage } from '../../pages/loginPage';
import { SecurePage } from '../../pages/securePage';
import { loginData } from '../../support/constants';
const loginPage = new LoginPage();
//const securePage = new SecurePage();

describe('Tests for app login page', () => {
    before(() => {
        loginPage.visit();
    });

    it('ID:1 - Verify login page form and elements', () => {
        loginPage.loginForm().should('be.visible');
        loginPage.usernameLabel().should('be.visible');
        loginPage.usernameInput().should('be.visible');
        loginPage.passwordLabel().should('be.visible');
        loginPage.passwordInput().should('be.visible');
        loginPage.submitButton().should('be.visible');
    });

    it('ID:2 - Verify login success with valid username and valid password', () => {
        loginPage.usernameInput().type('tomsmith');
        loginPage.passwordInput().type('SuperSecretPassword!');
        loginPage.submitButton().click();
        
        cy.get(`[id='content']`).should('be.visible')
        cy.get(`[id='flash']`).should('be.visible');
        cy.get(`[class='icon-2x icon-signout']`).should('be.visible');
    });
});

describe('Tests with invalid login credentials', () => {
    before(() => {
        loginPage.visit();
        // cy.fixture('loginPageData.json').then(data => {
        //     loginData = data
        // }); 
    });

    loginData.forEach(data => {
        it(`${data.testCase}`,() => {
            loginPage.usernameInput().type(data.username);
            loginPage.passwordInput().type(data.password);
            loginPage.submitButton().click();

            loginPage.flashSuccessError().should('contain', data.expectedErrorText);
        })
    });

})