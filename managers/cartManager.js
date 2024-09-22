import productoInstancia from "./productManager.js";
import fs from "fs"
class CartManager{
    constructor(){
        this.productsList = []
    }
    //id autoincrementable
    static cartId = 0;

    createCart(){
        CartManager.cartId++
        const cart = {
            cartId:CartManager.cartId,
            productsList: this.productsList
        }
        console.log(cart)    
    }

    addToCart(productoCliente){
        this.productsList.push(productoCliente)
        //console.log(this.productsList)
        //mejora
       
        
        
    }

    //ver carrito con productos del usuario
    showCart(){
        
    }

    //guardar5 carrito en archivo
    saveCart(){
        let archivosCarrito = JSON.stringify(this.productsList,null, 2)
        
        fs.writeFileSync("../managers/cart.json", archivosCarrito)

    }

    //eliminar producto de carrito
    deleteCart(busqueda){
        console.log("Eli8minando...")
        console.log(busqueda)
        
            
        
      
    }
    
}

let cartInstancia = new CartManager()
//cart.createCart()
//console.log(productoInstancia)
export default cartInstancia;