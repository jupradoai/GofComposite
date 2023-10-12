class Componente:
    def __init__(self, nome):
        self.nome = nome
    
    def  adicionar(self):
        pass

    def remover(self):
        pass

    def obterNome(self):
        pass

class Folha(Componente):
    def __init__(self, nome, preco):
        super().__init__(nome)
        self.preco = preco

    def obterNome(self):
        return self.nome
    
    def obterPreco(self):
        return self.preco
    
class Conteiner(Componente):
    def __init__(self, nome):
        super().__init__(nome)
        self.componentes = []

    def adicionar(self, componente):
        self.componentes.append(componente)

    def remover(self, componente):
        index = self.componentes.index(componente)
        self.componentes.pop(index)

    def obterNome(self):
        return self.nome
    
    def obterPreco(self):
        preco = 0
        for componente in self.componentes:
            preco += componente.obterPreco()
        return preco
    
# Exemplo de Uso #########################################################################
maca = Folha('Maçã', 2.50)
laranja = Folha('Laranja', 3.0)
uva = Folha('Uva', 5.0)

frutas = Conteiner("Frutas")
frutas.adicionar(maca)
frutas.adicionar(laranja)
frutas.adicionar(uva)

caixa = Conteiner("Caixa de Frutas")
caixa.adicionar(frutas)
caixa.adicionar(Folha('Embalagem', 1.0))

print(f"Preço Total: R${caixa.obterPreco()}")
