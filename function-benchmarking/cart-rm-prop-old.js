import Product from "../src/entities/product.js"

export default class CartRmPropOld {
    constructor({ products }){
        this.products = this.removeUndefinedProps(products)
    }

    //má prática
    removeUndefinedProps(products){
        const productEntities = products
                .filter(product => !!Reflect.ownKeys(product).length)
                .map(product => new Product(product))
        //Com o JSON parse, retiramos o undefined, por baixo dos panos ele deleta uma classe e retorna outra
        return JSON.parse(JSON.stringify(productEntities))
    }
}