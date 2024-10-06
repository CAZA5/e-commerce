let socket = io()



//funcion para renderizar productos en navegador
const renderProducts = (data)=>{
    
        const contenedorProductos = document.getElementById("contenedor-productos")
        contenedorProductos.innerHTML = ''; 

        data.forEach(producto => {
            const card = document.createElement("div")
            card.innerHTML = 
            
            `
            <div class="card">
                <p>${producto.nombre}</p>
                <p>${producto.prodcutoId}</p>
            </div>

            
                
            `
            contenedorProductos.appendChild(card)
        });

        

        
    
}

socket.on("crearProducto", (data)=>{
    console.log(data)

    socket.emit("render", "Renderizar prodcuto creado")

    socket.on("renderToClient", (data)=>{
        
        
        socket.emit("res", data)
        const po = document.getElementById("productos")
        let puesta = ""
        data.forEach(p=>{
            puesta = p.nombre
        })
        po.innerHTML = puesta
    })
})



socket.on("conexion", (data)=>{
    console.log(data)

    
    
   
    
})