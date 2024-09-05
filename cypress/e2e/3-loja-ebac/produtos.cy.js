///<reference types="cypress"/>

describe('Produtos', () => {


        beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            .contains('Abominable Hoodie')
            .click()
            cy.get('.sku_wrapper').should('contain', 'SKU: MH09')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            .first()
            .click()
        cy.get('.woocommerce-product-details__short-description > p')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            .last()
            .click()
        cy.get('.woocommerce-product-details__short-description > p')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            .eq(5)
            .click()
         cy.get('.woocommerce-product-details__short-description > p')
    });
});