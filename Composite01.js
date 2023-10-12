class Componente{
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){}

    remover(){}

    obterNome(){}
}

class Folha extends Componente{
    constructor(nome, preco){
        super(nome);
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }
}

class Conteiner extends Componente{
    constructor(nome){
        super(nome);
        this.componentes = [];
    }

    adicionar(componente){
        this.componentes.push(componente);
    }

    remover(componente){
        const index = this.componentes.indexOf(componente);
        this.componentes.splice(index, 1);
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        let preco = 0;
        this.componentes.forEach(componente => {
            preco += componente.obterPreco();
        });
        return preco;
    }
}

// USANDO O RECURSO COMO FRUTA E PREÇO #######################################
const maca = new Folha("Maçã", 9.50);
const laranja = new Folha ("Laranja", 3.00);
const uva = new Folha ("Uva", 8.00)

const frutas = new Conteiner("Frutas");

frutas.adicionar(maca);
frutas.adicionar(laranja);
frutas.adicionar(uva);

const caixa = new Conteiner("Caixa de Frutas");
caixa.adicionar(frutas);
caixa.adicionar(new Folha("Embalagem", 1.00));
caixa.adicionar(new Folha("Embalagem", 1.00));
caixa.adicionar(new Folha("Embalagem", 1.00));

console.log(`Preço Total: R$${caixa.obterPreco()}`);