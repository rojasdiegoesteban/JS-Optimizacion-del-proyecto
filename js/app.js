// Clases
class Producto {

    constructor(marca, modelo, talle, cantidad, codigo) {
        this.marca = marca;
        this.modelo = modelo;
        this.talle = talle;
        this.cantidad = cantidad;
        this.codigo = codigo;
    }
};

class Zapatilla extends Producto {

    constructor(marca, modelo, talle, cantidad, codigo, comColores, ajuste) {
        super(marca, modelo, talle, cantidad, codigo);
        this.comColores = comColores;
        this.ajuste = ajuste;
    }

    get getMarca() {
        return this.marca;
    }

    get getModelo() {
        return this.modelo;
    }
};

class Indumentaria extends Producto {

    constructor(marca, modelo, talle, cantidad, codigo, color, tipo) {
        super(marca, modelo, talle, cantidad, codigo);
        this.color = color;
        this.tipo = tipo;
    }
};

// Funciones
const mostrarMenu = function (msj, list) {
    let j = 0;

    for (let i = 0; i < list.length; i++) {
        j = i + 1;
        msj = msj + j + " - " + list[i] + "\n";
    }

    j = j + 1;
    msj = msj + j + " - " + "Salir";

    return msj;
};

function validarOpcion(mensaje, lista) {
    let seleccionado;

    while (true) {
        seleccionado = parseInt(prompt(mostrarMenu(mensaje, lista)));

        if (!isNaN(seleccionado) && seleccionado != null && seleccionado != "") {
            break;
        }
        else {
            alert("Por favor ingrese una opcion valida");
            continue;
        }

    }
    return seleccionado;
};

function listarProductos(lista) {
    let msj = "";
    /*
        const tipo = (categ) => {
            if(categ == "Z") {
                return "zapatillas";
            }
            else if(categ == "I") {
                return "indumentaria";
            }
        };
    */
    lista.forEach((producto) => {
        if (producto.codigo[0] == "Z") {
            msj = msj + "Producto: " + producto.marca + " " + producto.modelo + ", ";
            msj = msj + "Talle: " + producto.talle + ", ";
            msj = msj + "Colores: " + producto.comColores + ", ";
            msj = msj + "Tipo de ajuste: " + producto.ajuste + ", ";
            msj = msj + "Codigo: " + producto.codigo + "\n";
            msj = msj + "---------------------------------------------------------------------" + "\n";
        }
        if (producto.codigo[0] == "I") {
            msj = msj + "Producto: " + producto.marca + " " + producto.modelo + ", ";
            msj = msj + "Tipo: " + producto.tipo + ", ";
            msj = msj + "Talle: " + producto.talle + ", ";
            msj = msj + "Color: " + producto.color + ", ";
            msj = msj + "Codigo: " + producto.codigo + "\n";
            msj = msj + "---------------------------------------------------------------------" + "\n";
        }
    });

    return msj;
};

function cargarProducto(codigo, lista) {
    let msjPantalla = "";

    //Busco el producto en la lista de productos
    const prodAgregado = lista.find((prod) => prod.codigo === codigo);

    //Si el producto fue encontrado, lo cargo en el carrito
    if (prodAgregado != undefined) {
        carrito.push(prodAgregado);
        msjPantalla = msjPantalla + "Producto agregado correctamente! \n";
    }
    else {
        msjPantalla = msjPantalla + "Codigo no encontrado! \n";
    }

    alert(msjPantalla);
};

/*************************************************************************************/
//  Creo los Objetos de mis productos
const zapatilla1 = new Zapatilla("NIKE", "AIR FORCE", "40", "5", "ZNIAF", "Blanco", "Cordones");
const zapatilla2 = new Zapatilla("NIKE", "AIR MAX", "42", "7", "ZNIAM", "Negro-Blanco", "Cordones");
const zapatilla3 = new Zapatilla("ADIDAS", "FORUM", "41", "10", "ZADFO", "Blanco-Azul", "Abrojo");
const buzo1 = new Indumentaria("DC", "skate old", "XL", "6", "IDCSO", "Gris", "Buzo Canguro");
const remera1 = new Indumentaria("Element", "Star", "L", "10", "IELST", "Blanco", "Remera Manga corta");
const pantalon1 = new Indumentaria("Levis", "Basic", "M", "7", "ILEBA", "Negro", "Jean basico");

//Creo el listado de productos
const zapatillas = [zapatilla1, zapatilla2, zapatilla3];
const indumentarias = [buzo1, remera1, pantalon1];
let carrito = [];
/*************************************************************************************/
const menuPrincipal = ["Zapatillas", "Indumentaria"];
const menuSecundario = ["Agregar un nuevo producto al carrito", "Ver mi carrito"];
let msjPrincipal = "Seleccione el tipo de producto que desea comprar:\n";
let msjSecundario = "Seleccione una opcion:\n";
let seleccion = 0;
let selZapatilla = 0;
let selIndumentaria = 0;
let msjPantalla = "";
let codigo = "";

// Comienzo del programa
alert("¡Bienvenido a mi tienda virtual!");

while (seleccion != 3) {

    /*Solicito al usuario que seleccione categoria de producto o salir*/
    seleccion = validarOpcion(msjPrincipal, menuPrincipal);

    switch (seleccion) {
        // Zapatillas
        case 1:
            // Creo el mensaje por pantalla, muestro la lista de los productos y pido que el usuario elija producto
            msjPantalla = "Listado de Zapatillas:\n\n";
            msjPantalla = msjPantalla + listarProductos(zapatillas);
            msjPantalla = msjPantalla + "\n" + "Ingrese el codigo del producto que desea agregar a su carrito: ";
            codigo = prompt(msjPantalla);

            // cargo el producto seleccionado al carrito
            cargarProducto(codigo, zapatillas);

            //Solicito al usuario si desea seguir comprando o ver su carrito
            selZapatilla = validarOpcion(msjSecundario, menuSecundario);

            // opcion 1: sigue comprando
            if (selZapatilla == 1) {
                break;
            }
            //opcion2: muestro carrito
            else if (selZapatilla == 2) {

                if (carrito.length == 0) {
                    alert("Su carrito esta vacio!");
                    break;
                }

                msjPantalla = "Listado de productos en su carrito:\n";
                msjPantalla = msjPantalla + "Cantidad de productos: " + carrito.length + "\n\n";
                msjPantalla = msjPantalla + listarProductos(carrito);
                alert(msjPantalla);
            }
            else if (selZapatilla == 3) {
                seleccion = 3;
                alert("¡Hasta pronto!");
            }
            else {
                alert("La opcion ingresada no se encuentra disponible.");
            }

            break;

        // Indumentaria
        case 2:
            // Creo el mensaje por pantalla, muestro la lista de los productos y pido que el usuario elija producto
            msjPantalla = "Listado de Indumentaria:\n\n";
            msjPantalla = msjPantalla + listarProductos(indumentarias);
            msjPantalla = msjPantalla + "\n" + "Ingrese el codigo del producto que desea agregar a su carrito: ";
            codigo = prompt(msjPantalla);

            // cargo el producto seleccionado al carrito
            cargarProducto(codigo, indumentarias);

            //Solicito al usuario si desea seguir comprando o ver su carrito
            selIndumentaria = validarOpcion(msjSecundario, menuSecundario);

            // opcion 1: sigue comprando
            if (selIndumentaria == 1) {
                break;
            }
            //opcion2: muestro carrito
            else if (selIndumentaria == 2) {

                if (carrito.length == 0) {
                    alert("Su carrito esta vacio!");
                    break;
                }

                msjPantalla = "Listado de productos en su carrito:\n";
                msjPantalla = msjPantalla + "Cantidad de productos: " + carrito.length + "\n\n";
                msjPantalla = msjPantalla + listarProductos(carrito);
                alert(msjPantalla);
            }
            else if (selIndumentaria == 3) {
                seleccion = 3;
                alert("¡Hasta pronto!");
            }
            else {
                alert("La opcion ingresada no se encuentra disponible.");
            }

            break;

        case 3:
            alert("¡Hasta pronto!");
            break;

        default:
            alert("La opcion ingresada no se encuentra disponible.");
            break;
    }

}
