class Producto {
    constructor(idProducto, precio) {
      this.idProducto = idProducto;
      this.precio = precio;
      this.contadorProductos = 0;
    }
  
    getIdProducto() {
      return this.idProducto;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getPrecio() {
      return this.precio;
    }
  
    setPrecio(precio) {
      this.precio = precio;
    }
  
    toString() {
      return `Producto ${this.idProducto}: ${this.nombre} - Precio: $${this.precio}`;
    }
  }
  
  class Orden {
    constructor(idOrden) {
      this.idOrden = idOrden;
      this.productos = [];
      this.contadorProductosAgregados = 0;
      this.MAX_PRODUCTOS = 5;
    }
  
    agregarProducto(producto) {
      if (this.contadorProductosAgregados < this.MAX_PRODUCTOS) {
        this.productos.push(producto);
        this.contadorProductosAgregados++;
        console.log(`Producto "${producto.getNombre()}" agregado a la orden.`);
      } else {
        console.log(
          `No se pueden agregar más productos. Se ha alcanzado el límite máximo de ${this.MAX_PRODUCTOS} productos.`
        );
      }
    }
  
    calcularTotal() {
      let total = 0;
      this.productos.forEach((producto) => {
        total += producto.getPrecio();
      });
      return total;
    }
  
    mostrarOrden() {
      console.log(`Orden: ${this.idOrden}`);
      console.log("Productos en la orden:");
      this.productos.forEach((producto) => {
        console.log(producto.toString());
      });
      console.log(`Total: $${this.calcularTotal()}`);
    }
  }
  
  // Ejemplo de uso
  const orden = new Orden(1);
  
  const producto1 = new Producto(1, 10);
  producto1.setNombre("Producto 1");
  
  const producto2 = new Producto(2, 20);
  producto2.setNombre("Producto 2");
  
  const producto3 = new Producto(3, 15);
  producto3.setNombre("Producto 3");
  
  orden.agregarProducto(producto1);
  orden.agregarProducto(producto2);
  orden.agregarProducto(producto3);
  
  orden.mostrarOrden();
  