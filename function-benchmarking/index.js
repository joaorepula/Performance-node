import Benchmark from "benchmark";
import CartNew from "./new-id.old.js";
import CartOld from "./cart-id.old.js";
import CartRmPropNew from "./cart-rm-prop-new.js"
import CartRmPropOld from "./cart-rm-prop-old.js";
import database from "../database.js"
const suite = new Benchmark.Suite;
import CartPriceNew from "./cart-price-new.js"
import CartPriceOld from "./cart-price-old.js";
// suite
//      .add('cart#cartIdUUID',function () {
//         new CartOld()
//      })
//      .add('cart#cardIdCrypto',function () {
//         new CartNew()
//      })
//      .on('cycle', (event) => console.log(String(event.target)))
//      .on('complete', function () {
//         console.log(`Fastest is ${this.filter('fastest').map('name')}`)
//      })
//      .run()

const data = {
   products : [
      {
         id:'ae',
         n:undefined,
         abc:undefined,
         a:null,
         b:123,
      },
      {
         id:'ae',
         n:undefined,
         abc:undefined,
         a:null,
         b:123,
      }
   ]
}

// suite
//      .add('cart#rmEmptyPropsMapReduce',function () {
//         new CartRmPropOld(data)
//      })
//      .add('cart#rmEmptyPropsFor',function () {
//         new CartRmPropNew(data)
//      })
//      .on('cycle', (event) => console.log(String(event.target)))
//      .on('complete', function () {
//         console.log(`Fastest is ${this.filter('fastest').map('name')}`)
//      })
//      .run({ async: true })


suite
     .add('cart#calcPriceMapReduce',function () {
        new CartPriceOld(database)
     })
     .add('cart#calcPriceFor',function () {
        new CartPriceNew(database)
     })
     .on('cycle', (event) => console.log(String(event.target)))
     .on('complete', function () {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
     })
     .run({ async: true })
