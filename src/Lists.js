class List {
    static getItems() {
        return [
            { code: "cafe", overview: "Café", price: 3 },
            { code: "chantily", overview: "Chantily (extra do Café)", price: 1.5 },
            { code: "suco", overview: "Suco Natural", price: 6.2 },
            { code: "sanduiche", overview: "Sanduíche", price: 6.5 },
            { code: "queijo", overview: "Queijo (extra do Sanduíche)", price: 2 },
            { code: "salgado", overview: "Salgado", price: 7.25 },
            { code: "combo1", overview: "1 Suco e 1 Sanduíche", price: 9.5 },
            { code: "combo2", overview: "1 Café e 1 Sanduíche", price: 7.5 }
        ];
    }
    static getPayment() {
        return [{ name: "dinheiro", var: 0.05, operator: "discount" }, { name: "credito", var: 0.03, operator: "addition" }, { name: "debito", var: 1, operator: "null" }];
    }
}

export default List;