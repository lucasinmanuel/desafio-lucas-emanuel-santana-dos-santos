import Utils from "./Utils.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(formaDePagamento, itens) {
        if (itens.length == 0 || typeof (itens) != "object") {
            return "Não há itens no carrinho de compra!";
        } else if (!this.extraItemValidator(itens)) {
            return "Item extra não pode ser pedido sem o principal";
        } else if (!this.paymentValidator(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        } else {
            const result = itens.map((value) => {
                if (!value.includes("0")) {
                    const item = value.split(",")[0];
                    const number = Number(value.split(",")[1]);
                    let price = Utils.getPrice(item);

                    if (price != -1 && value.includes(",")) {
                        const discount = Utils.getDiscountOrAddition(formaDePagamento, price);
                        return discount * number;
                    } else {
                        return "Item inválido!";
                    }
                } else {
                    return "Quantidade inválida!";
                }
            });
            if (result.some(v => typeof (v) != "number")) {
                return result.find(v => typeof (v) == "string");
            } else {
                let totalPrice = result.reduce((previousValue, currentValue) => previousValue + currentValue);
                return `R$ ${Number.parseFloat(totalPrice).toFixed(2).replace(".", ",")}`;
            }
        }
    }

    extraItemValidator(arr) {
        let bool = true;
        arr.forEach(value => {
            switch (value.split(",")[0]) {
                case "chantily":
                    bool = arr.some(v => v.includes("cafe"));
                    break;
                case "queijo":
                    bool = arr.some(v => v.includes("sanduiche"));
                    break;
                case "chantily":
                    bool = arr.some(v => v.includes("cafe"));
                    break;
            }
        });
        return bool;
    }

    paymentValidator(payment) {
        return ["dinheiro", "credito", "debito"].includes(payment);
    }

}

export { CaixaDaLanchonete };
