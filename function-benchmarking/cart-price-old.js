export default class CartPriceOld {
    constructor({ products }){
        this.products = this.products 
        this.total = this.getCartPrice
    }

    getCartPrice(){
        return this.products
                .map(product => product.price)
                .reduce((prev, next) => prev + next, 0)
    }
}