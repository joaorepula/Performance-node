import { randomUUID as uuid } from 'crypto'

export default class CartNew {
    constructor(){
        this.id = uuid()
    }
}