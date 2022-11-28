// Array de Productos
const productos = [
    {
        id: "indu01",
        nombre: "Remera Bonzo Exploited",
        imagen: "./img/remera01.webp",
        precio: 2500
    },
    {
        id: "indu02",
        nombre: "Remera Duck Punk",
        imagen: "./img/remera02.webp",
        precio: 3000
    },
    {
        id: "indu03",
        nombre: "Remera Big Tradi",
        imagen: "./img/remera03.webp",
        precio: 2500
    },
    {
        id: "indu04",
        nombre: "Remera Breakdown",
        imagen: "./img/remera04.webp",
        precio: 2500
    },
    {
        id: "indu05",
        nombre: "Remera Bonzo Orange Crush",
        imagen: "./img/remera05.webp",
        precio: 3000
    },
    {
        id: "indu06",
        nombre: "Remera papa pitufo",
        imagen: "./img/remera06.webp",
        precio: 3000
    },
    {
        id: "indu07",
        nombre: "Canguro Big Tradi Pop",
        imagen: "./img/buzo01.webp",
        precio: 11500
    },
    {
        id: "indu08",
        nombre: "Jogger Tradi Grey",
        imagen: "./img/pantalon01.webp",
        precio: 8500
    }
];

let productosEnCarrito = [];
const contenedorIndu = document.querySelector("#contenedor-indu");
const contadorCarrito = document.querySelector("#contador-carrito");
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

function mostrarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.classList.add("col-lg-3");
        div.innerHTML = `
            <div class="card shadow card-indu">
                <img src="${producto.imagen}" class="card-img-top img-indu" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title titulo-indu">${producto.nombre}</h5>
                    <p class="precio-indu">$${producto.precio}</p>
                    <button class="btn-card boton-agregar-indu" id="${producto.id}"><span>Agregar</span></button>
                </div>
            </div>
        `;

        contenedorIndu.append(div);
    });
};

function agregarProdAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregar = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const i = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[i].cantidad++;

    } else {
        productoAgregar.cantidad = 1;
        productosEnCarrito.push(productoAgregar);
    }

    actualizarContadorCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarContadorCarrito() {
    let contador = productosEnCarrito.reduce((acu, producto) => acu + producto.cantidad, 0);
    contadorCarrito.innerHTML = contador;
};


/************************************************************************************************************/
mostrarProductos();
const botonesAgregar = document.querySelectorAll(".boton-agregar-indu");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarContadorCarrito();
} else {
    productosEnCarrito = [];
}

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarProdAlCarrito);
});



