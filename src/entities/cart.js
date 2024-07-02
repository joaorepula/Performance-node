import Product from "./product.js"
import { randomUUID as uuid } from 'crypto'
export default class Cart {
    constructor({ at, products }){
        this.id = uuid()
        this.at = at
        this.products = this.removeUndefinedProps(products)
        this.total = this.getCartPrice()
    }

    //má prática
    removeUndefinedProps(products){
        const productEntities = products
                .filter(product => !!Reflect.ownKeys(product).length)
                .map(product => new Product(product))
        //Com o JSON parse, retiramos o undefined, por baixo dos panos ele deleta uma classe e retorna outra
        return JSON.parse(JSON.stringify(productEntities))
    }
    //má prática
    getCartPrice(){
        return this.products
                .map(product => product.price)
                .reduce((prev, next) => prev + next, 0)
    }
}