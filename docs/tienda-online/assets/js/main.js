// Variables globales
let carrito = [];
let totalProductos = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(id, nombre, precio, imagen) {
    const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        cantidad: 1
    };
    
    // Verificar si el producto ya existe en el carrito
    const existente = carrito.find(item => item.id === id);
    
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push(producto);
    }
    
    actualizarContadorCarrito();
    mostrarNotificacion(`${nombre} agregado al carrito`);
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    
    // Actualizar contador en la navegación
    const contadorElement = document.getElementById('contador-carrito');
    if (contadorElement) {
        contadorElement.textContent = totalProductos;
    }
    
    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
    }
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notificacion);
    
    // Animar entrada
    setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    actualizarContadorCarrito();
    actualizarVistaCarrito();
    mostrarNotificacion('Producto eliminado del carrito');
}

// Función para actualizar cantidad de producto
function actualizarCantidad(id, nuevaCantidad) {
    const producto = carrito.find(item => item.id === id);
    if (producto && nuevaCantidad > 0) {
        producto.cantidad = nuevaCantidad;
        actualizarContadorCarrito();
        actualizarVistaCarrito();
    }
}

// Función para actualizar la vista del carrito
function actualizarVistaCarrito() {
    const tbody = document.getElementById('productos-carrito');
    const carritoVacio = document.querySelector('.carrito-vacio');
    const carritoContenido = document.querySelector('.carrito-contenido');
    
    if (!tbody) return;
    
    if (carrito.length === 0) {
        if (carritoVacio) carritoVacio.style.display = 'block';
        if (carritoContenido) carritoContenido.style.display = 'none';
        return;
    }
    
    if (carritoVacio) carritoVacio.style.display = 'none';
    if (carritoContenido) carritoContenido.style.display = 'block';
    
    tbody.innerHTML = '';
    let subtotal = 0;
    
    carrito.forEach(producto => {
        const subtotalProducto = producto.precio * producto.cantidad;
        subtotal += subtotalProducto;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="producto-info">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <span>${producto.nombre}</span>
                </div>
            </td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <input type="number" value="${producto.cantidad}" min="1" 
                       class="cantidad-input" 
                       onchange="actualizarCantidad(${producto.id}, this.value)">
            </td>
            <td class="subtotal">$${subtotalProducto.toFixed(2)}</td>
            <td>
                <button class="btn-eliminar" onclick="eliminarDelCarrito(${producto.id})">
                    Eliminar
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Actualizar totales
    const envio = 19.99;
    const impuestos = subtotal * 0.1; // 10% de impuestos
    const total = subtotal + envio + impuestos;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('envio').textContent = `$${envio.toFixed(2)}`;
    document.getElementById('impuestos').textContent = `$${impuestos.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Función para proceder al pago
function procederPago() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de proceder al pago.');
        return;
    }
    
    const total = document.getElementById('total').textContent;
    const confirmacion = confirm(`¿Proceder al pago por ${total}?`);
    
    if (confirmacion) {
        // Simular proceso de pago
        mostrarNotificacion('¡Gracias por tu compra! Procesando pago...');
        
        setTimeout(() => {
            carrito = [];
            actualizarContadorCarrito();
            actualizarVistaCarrito();
            mostrarNotificacion('¡Pago procesado exitosamente!');
        }, 2000);
    }
}

// Función para validar formularios
function validarFormulario(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let valido = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            valido = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return valido;
}

// Event listeners para carga de la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar carrito guardado
    cargarCarrito();
    
    // Si estamos en la página del carrito, actualizar vista
    if (document.getElementById('productos-carrito')) {
        actualizarVistaCarrito();
    }
    
    // Agregar event listeners a botones de agregar al carrito
    const botonesCarrito = document.querySelectorAll('.btn-carrito');
    botonesCarrito.forEach((boton, index) => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener datos del producto desde el HTML
            const productoElement = this.closest('.producto');
            const nombre = productoElement.querySelector('h3').textContent;
            const precioText = productoElement.querySelector('.precio').textContent;
            const precio = parseFloat(precioText.replace('$', ''));
            const imagen = productoElement.querySelector('img').src;
            const id = Date.now() + index; // ID único simple
            
            agregarAlCarrito(id, nombre, precio, imagen);
        });
    });
    
    // Agregar event listener al formulario de contacto
    const formularioContacto = document.querySelector('.formulario-contacto form');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validarFormulario(this)) {
                mostrarNotificacion('¡Mensaje enviado correctamente! Te responderemos pronto.');
                this.reset();
            } else {
                mostrarNotificacion('Por favor, completa todos los campos requeridos.');
            }
        });
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para mostrar/ocultar menú en móviles
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-active');
}

// Función de búsqueda de productos (si se implementa)
function buscarProductos(termino) {
    const productos = document.querySelectorAll('.producto');
    
    productos.forEach(producto => {
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
        const descripcion = producto.querySelector('p').textContent.toLowerCase();
        
        if (nombre.includes(termino.toLowerCase()) || descripcion.includes(termino.toLowerCase())) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Exportar funciones para uso global
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.actualizarCantidad = actualizarCantidad;
window.procederPago = procederPago;
window.toggleMenu = toggleMenu;
window.buscarProductos = buscarProductos;
