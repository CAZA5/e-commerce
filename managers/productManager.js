//const fs = require("fs")
import fs from "fs"
class ProductManager{
    
    constructor(){
        this.productsList = []

    }

    //metodos
    //agregar productos
    static productoId = 0
    getProducts(){
       return this.productsList
       
    }

    saveToFile(){
        let json = JSON.stringify(this.productsList, null, 2)
        

        //sthis.productsList.push(json)
        //console.log(json)
        //fs.appendFileSync("../managers/productos.json", json)
        fs.writeFileSync("../managers/productos.json", json)

    }

    addPproducts(nombre, descripcion,precio, thumbnail, sku, stock){
        ProductManager.productoId++
        let producto={
            nombre,
            precio,
            descripcion,
            thumbnail,
            sku,
            stock,
            prodcutoId:ProductManager.productoId,

        }
        //guardar datos en archivo
  
        
        this.productsList.push(producto)
        //fs.appendFileSync("./productos.txt", JSON.stringify(producto, null, 2))
        
        
    }

    getProductsById(id){
        let productos = fs.readFileSync("./productos.txt", "utf-8")
       /*for (let i =0; i<=this.productsList.length;i++){
            if (i == id){
                console.log(this.productsList[i-1])
            }
       }*/
    }
}

const productoInstancia = new ProductManager()
//producto.addPproducts("nombre", "des", 1000, "img.png", 10000156469, 58)



//producto.saveToFile()


//console.log(producto.getProductsById(1))



//console.log(producto.getProducts())

//console.log(producto.getProductsById(1))

//export default ProductManager
export default productoInstancia
