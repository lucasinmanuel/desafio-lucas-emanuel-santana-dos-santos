import Lists from "./Lists.js";

class Utils {
    static getPrice(pItem) {
        let price = -1;
        Lists.getItems().forEach(item => {
            if (item.code == pItem) {
                price = item.price;
            }
        });
        return price;
    }
    static getDiscountOrAddition(pPayment, value) {
        let discountOrAddition = value;
        Lists.getPayment().forEach(payment => {
            if (payment.name == pPayment) {
                if (payment.operator == "discount") {
                    discountOrAddition = value - payment.var * value;
                } else if (payment.operator == "addition") {
                    discountOrAddition = value + payment.var * value;
                }
            }
        });
        return discountOrAddition;
    }
}

export default Utils;