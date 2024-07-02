import Product from "../src/entities/product.js"

export default class CartRmPropNew {
    constructor({ products }){
        this.products = this.removeUndefinedProps(products)
    }

    removeUndefinedProps(products) {
        const result = [];
        for (const product of products) {
            const cleanedProduct = {};
            Object.keys(product).forEach(key => {
                if (product[key]) {
                    cleanedProduct[key] = product[key];
                }
            });
    
            if (Object.keys(cleanedProduct).length > 0) {
                result.push(new Product(cleanedProduct));
            }
        }
        return result;
    }
    /*removeUndefinedProps(products){
        const result = []
        for(const product of products){
            const keys = Reflect.ownKeys(product)

            if(!keys.length) continue;

            //keys.forEach(key => product[key] || delete product[key])
            //keys.forEach(key => product[key] || Reflect.deleteProperty[product, key])
            let newObject = {}

            keys.forEach(key => {
                if(!keys[key])return;
                newObject[key] = keys[key]
            })
            result.push(new Product(product))
            //result.push(new Product(product))
        }
        return result
    }*/

}