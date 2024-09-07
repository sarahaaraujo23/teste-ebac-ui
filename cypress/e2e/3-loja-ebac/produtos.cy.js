///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Produtos', () => {


        beforeEach(() => {
            produtosPage.visitarUrl()

        });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
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

    it('Deve buscar um produto com sucesso', () => {
        let produto = "Ariel Roll Sleeve Sweatshirt"
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página de um produto específico', () => {
        produtosPage.visitarProduto('Arcadio Gym Short')
        cy.get('.product_title').should('contain', 'Arcadio Gym Short')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        let qtd = 1
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.adcionarProdutoCarrinho('M','Brown',qtd) //quantidade não precisa ser entre aspas:  produtosPage.adcionarProdutoCarrinho('M','Brown',1)
        cy.get('.woocommerce-message').should('contain', '“Aero Daily Fitness Tee” foi adicionado no seu carrinho.')
    });
    // próximo teste usa a massa de dados criada na pasta fixtures > produtos. Entre [] é definida a posição do exemplo que quer usar
    it('Deve adicionar um produto ao carrinho - buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.adcionarProdutoCarrinho(
            dados[1].tamanho,
            dados[1].cor,
            dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
    });
});
}); 