export class LoginPage {

    visit() {
        cy.visit('/login');
    };

    loginForm() {
        return cy.get(`[id='login']`);
    }

    usernameLabel() {
        return cy.get(`label[for='username']`);
    }

    usernameInput() {
        return cy.get(`input[id='username']`);
    }

    passwordLabel() {
        return cy.get(`label[for='password']`);
    }

    passwordInput() {
        return cy.get(`input[id='password']`);
    }

    submitButton() {
        return cy.get(`button[type='submit']`)
    }

    flashSuccessError() {
        return cy.get(`[id='flash']`)
    }

}
