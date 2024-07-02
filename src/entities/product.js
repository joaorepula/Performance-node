export default class Product {
    constructor({
        description,
        name,
        price,
        tmpProperty,
        activePromoid
    }){
        this.description = description,
        this.name = name ,
        this.price = price ,
        this.tmpProperty = tmpProperty,
        this.activePromoid = activePromoid ?? 0
    }
}