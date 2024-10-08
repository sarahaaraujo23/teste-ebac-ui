///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('sarahjanne2008@gmail.com')
        cy.get('#password').type('ebac123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, sarahjanne2008')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('sarahjanne@gmail.com')
        cy.get('#password').type('ebac123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error > li').should('exist')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('sarahjanne2008@gmail.com')
        cy.get('#password').type('ebac')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail sarahjanne2008@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
    })
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, sarahjanne2008')
    });
    it('Deve fazer login com sucesso - Usando fixture', () => {
       cy.fixture('perfil').then(dados =>{
        cy.get('#username').type(dados.usuario, {log:false}) //o comando faz com que não sejam apresentados os dados em tela durante teste no test body
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, sarahjanne2008')
       })
    });
    it.only('Deve fazer login com sucesso - usando Comandos Customizados', () => {
        cy.login('sarahjanne2008@gmail.com','ebac123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, sarahjanne2008')
    });
})