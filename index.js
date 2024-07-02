import Cart from "./src/entities/cart.js"
import database from "./database.js"
const cart = new Cart(database)
//tmpProperty supostamente é de um sistema legado que ficou lá, precisamos manipular isso em memória nesse caso.

console.log(cart)