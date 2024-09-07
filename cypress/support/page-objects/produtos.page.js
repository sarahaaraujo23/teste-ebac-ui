class produtosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto(nomeProduto) {
       //cy.visit(`produtos/${nomeProduto}`) //quando eu quero fazer a consulta inserindo o "-" entre os espaços do nome do produto
       const urlFormatada = nomeProduto.replace(/ /g, '-') //quando eu quero que meu código faça a substituição automática os espaços, declarando string
       cy.visit(`produtos/${urlFormatada}`)
    }

    adcionarProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click() //outra forma de declarar o objeto: uma é com aspas simples, e outra com crase.
        cy.get('.input-text').clear()
        cy.get('.input-text').type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new produtosPage()