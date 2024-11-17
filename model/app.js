
// Array de productos añadidos (esto es solo un ejemplo)
const addedProducts1 = [
    { name: "Manzana", category: "FRUTA", status: "Fresco" },
    { name: "Zanahoria", category: "VERDURA", status: "Próximo a vencer" },
    { name: "Pollo", category: "PROTEINA", status: "Vencido" },
    { name: "Arroz", category: "ABARROTE", status: "Fresco" },
    { name: "Banana", category: "FRUTA", status: "Fresco" },
    { name: "Brocoli", category: "VERDURA", status: "Próximo a vencer" },
    { name: "Carne de res", category: "PROTEINA", status: "Vencido" },
    { name: "Lentejas", category: "ABARROTE", status: "Fresco" },
    { name: "Naranja", category: "FRUTA", status: "Próximo a vencer" },
    { name: "Huevo", category: "PROTEINA", status: "Fresco" }
];

// Categorías de productos
const labels = ['FRUTA', 'VERDURA', 'PROTEINA', 'ABARROTE'];

// Inicializamos los arrays de datos para las categorías
const frescos = [0, 0, 0, 0];
const proximosAVencer = [0, 0, 0, 0];
const vencidos = [0, 0, 0, 0];

// Recorrer los productos y actualizar los valores de cada categoría y estado
addedProducts1.forEach(product => {
    const categoryIndex = labels.indexOf(product.category); // Obtener el índice de la categoría
    if (categoryIndex !== -1) {
        if (product.status === "Fresco") {
            frescos[categoryIndex] += 1;
        } else if (product.status === "Próximo a vencer") {
            proximosAVencer[categoryIndex] += 1;
        } else if (product.status === "Vencido") {
            vencidos[categoryIndex] += 1;
        }
    }
});

// Crear el gráfico con los datos dinámicos
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico: barras
    data: {
        labels: labels, // Etiquetas de las categorías
        datasets: [
            {
                label: 'FRESCO',
                data: frescos, // Datos de productos frescos
                backgroundColor: 'rgba(255, 165, 0, 0.6)', // Color para "Fresco"
            },
            {
                label: 'PRÓXIMO A VENCER',
                data: proximosAVencer, // Datos de productos "Próximo a vencer"
                backgroundColor: 'rgba(255, 255, 0, 0.6)', // Color para "Próximo a vencer"
            },
            {
                label: 'VENCIDO',
                data: vencidos, // Datos de productos vencidos
                backgroundColor: 'rgba(0, 128, 0, 0.6)', // Color para "Vencido"
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'start',
                labels: {
                    boxWidth: 8,
                    padding: 6
                }
            }
        }
    }
});

// Función para mostrar el gráfico sin afectar otros elementos
function showChart() {
    const chartCanvas = document.getElementById('myChart');
    chartCanvas.classList.remove('hidden'); // Elimina la clase 'hidden' solo para mostrar el gráfico
}

// Llamamos a la función showChart() después de que el gráfico se haya creado
showChart();


// Funciones para abrir y cerrar los modales de recetas
function openRecetasModal() {
    document.getElementById('recetasModal').classList.remove('hidden'); // Muestra el modal de recetas
}
// Array para almacenar las recetas favoritas
let recetas = [ ];

// Función para mostrar las recetas en el modal
function mostrarRecetas() {
    const recetasList = document.getElementById('recetasList');
    recetasList.innerHTML = ''; // Limpiar la lista existente
    recetas.forEach(receta => {
        const li = document.createElement('li');
        li.textContent = receta;
        recetasList.appendChild(li);
    });
}
 // Función para agregar una nueva receta
 function agregarReceta() {
    const recetaSelect = document.getElementById('recetaSelect');
    const nuevaRecetaInput = document.getElementById('nuevaRecetaInput');
    const recetaSeleccionada = recetaSelect.value;

    let recetaAGuardar;
    // Verifica si se seleccionó una receta de la lista o se ingresó manualmente
    if (recetaSeleccionada === "Otra receta") {
        recetaAGuardar = nuevaRecetaInput.value.trim();
    } else {
        recetaAGuardar = recetaSeleccionada;
    }

    // Agrega la receta solo si no está vacía y no está ya en la lista
    if (recetaAGuardar && !recetas.includes(recetaAGuardar)) {
        recetas.push(recetaAGuardar); // Agregar la nueva receta al array
        mostrarRecetas(); // Actualizar la lista
        nuevaRecetaInput.value = ''; // Limpiar el campo de entrada manual
    }

    // Reiniciar el select
    recetaSelect.selectedIndex = 0; 
    nuevaRecetaInput.classList.add('hidden'); // Ocultar el campo de entrada manual
}

// Función para mostrar u ocultar el campo de entrada manual
function toggleManualInput() {
    const recetaSelect = document.getElementById('recetaSelect');
    const nuevaRecetaInput = document.getElementById('nuevaRecetaInput');
    if (recetaSelect.value === "Otra receta") {
        nuevaRecetaInput.classList.remove('hidden'); // Mostrar campo de entrada
        nuevaRecetaInput.focus(); // Enfocar el campo de entrada
    } else {
        nuevaRecetaInput.classList.add('hidden'); // Ocultar campo de entrada
    }
}

// Función para cerrar el modal
function closeRecetasModal() {
    document.getElementById('recetasModal').classList.add('hidden');
}

// Mostrar el modal y las recetas cuando se cargue la página
window.onload = function() {
    mostrarRecetas(); // Llenar la lista con recetas existentes
};
//Contenido de menu por dia
const menuSemana = {
    "Lunes": [
        { tipo: "Desayuno", plato: "Tortilla Española" },
        { tipo: "Almuerzo", plato: "Pollo al Horno con Verduras" },
        { tipo: "Cena", plato: "Ensalada César" }
    ],
    "Martes": [
        { tipo: "Desayuno", plato: "Avena con Frutas" },
        { tipo: "Almuerzo", plato: "Pasta al Pesto" },
        { tipo: "Cena", plato: "Sopa de Lentejas" }
    ],
    "Miércoles": [
        { tipo: "Desayuno", plato: "Yogur con Granola" },
        { tipo: "Almuerzo", plato: "Tacos de Carne" },
        { tipo: "Cena", plato: "Arroz con Pollo" }
    ],
    "Jueves": [
        { tipo: "Desayuno", plato: "Pan Tostado con Aguacate" },
        { tipo: "Almuerzo", plato: "Salmón a la Parrilla" },
        { tipo: "Cena", plato: "Ensalada de Quinoa" }
    ],
    "Viernes": [
        { tipo: "Desayuno", plato: "Smoothie de Frutas" },
        { tipo: "Almuerzo", plato: "Pizza Margarita" },
        { tipo: "Cena", plato: "Pasta Carbonara" }
    ],
    "Sábado": [
        { tipo: "Desayuno", plato: "Huevos Revueltos" },
        { tipo: "Almuerzo", plato: "Paella de Mariscos" },
        { tipo: "Cena", plato: "Verduras Asadas" }
    ],
    "Domingo": [
        { tipo: "Desayuno", plato: "Crepas con Mermelada" },
        { tipo: "Almuerzo", plato: "Asado de Cerdo" },
        { tipo: "Cena", plato: "Sopa de Pollo" }
    ]
};

// Función para mostrar el menú
function mostrarMenu() {
    const menuList = document.getElementById('menuList');
    const diaSeleccionado = document.getElementById('diaSeleccionado').value;
    const menuHoy = menuSemana[diaSeleccionado];

    menuList.innerHTML = ''; // Limpiar la lista existente
    if (menuHoy) {
        menuHoy.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.tipo}: ${item.plato}`;
            menuList.appendChild(li);
        });
        openMenuModal(); // Asegúrate de que el modal está abierto
    } else {
        menuList.innerHTML = '<li class="text-red-500">Por favor, selecciona un día válido.</li>';
    }
}

// Función para abrir el modal
function openMenuModal() {
    document.getElementById('menuModal').classList.remove('hidden');
}

// Función para cerrar el modal
function closeMenuModal() {
    document.getElementById('menuModal').classList.add('hidden');
}

// Contenido de Compras 
const productos = {
    "Fruta": [
        { nombre: "Manzanas", cantidad: "1 kg", precio: "$5,000" },
        { nombre: "Bananas", cantidad: "1 kg", precio: "$3,500" },
        { nombre: "Naranjas", cantidad: "1 kg", precio: "$4,000" }
    ],
    "Verdura": [
        { nombre: "Zanahorias", cantidad: "1 kg", precio: "$2,500" },
        { nombre: "Brócoli", cantidad: "500 g", precio: "$3,000" },
        { nombre: "Lechuga", cantidad: "1 unidad", precio: "$1,500" }
    ],
    "Abarrotes": [
        { nombre: "Pasta", cantidad: "500 g", precio: "$3,000" },
        { nombre: "Arroz", cantidad: "1 kg", precio: "$4,000" },
        { nombre: "Aceite", cantidad: "1 L", precio: "$8,000" }
    ]
};

// Función para mostrar los productos sugeridos según la categoría seleccionada
function mostrarCompras() {
    const categoriaSeleccionada = document.getElementById('categoriaSeleccionada').value;
    const comprasTable = document.getElementById('comprasTable');
    const tbody = comprasTable.querySelector('tbody');

    tbody.innerHTML = ''; // Limpiar la tabla existente

    if (categoriaSeleccionada && productos[categoriaSeleccionada]) {
        productos[categoriaSeleccionada].forEach(producto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="border border-gray-200 p-2">${producto.nombre}</td>
                <td class="border border-gray-200 p-2">${producto.cantidad}</td>
                <td class="border border-gray-200 p-2">${producto.precio}</td>
            `;
            tbody.appendChild(tr);
        });
        comprasTable.classList.remove('hidden'); // Mostrar la tabla
    } else {
        comprasTable.classList.add('hidden'); // Ocultar la tabla si no hay selección
    }
}

// Función para abrir el modal
function openComprasModal() {
    document.getElementById('comprasModal').classList.remove('hidden');
}

// Función para cerrar el modal
function closeComprasModal() {
    document.getElementById('comprasModal').classList.add('hidden');
    document.getElementById('categoriaSeleccionada').selectedIndex = 0; // Reinicia la selección
    mostrarCompras(); // Limpiar la tabla
}

// Funciones para abrir y cerrar el modal de búsqueda de recetas
function openBuscarRecetasModal() {
    document.getElementById('buscarRecetasModal').classList.remove('hidden'); // Muestra el modal de búsqueda de recetas
}

// Función para enviar un mensaje
function enviarMensaje() {
    const ingredientInput = document.getElementById('ingredientInput');
    const ingredient = ingredientInput.value.trim();

    if (ingredient) {
        // Muestra el mensaje del usuario en el chat
        mostrarMensaje('Tú: ' + ingredient, 'user');
        ingredientInput.value = ''; // Limpia el campo de entrada

        // Aquí llamas a la función que obtiene las recetas
        obtenerRecetas(ingredient);
    }
}

// Función para mostrar mensajes en el área de chat
function mostrarMensaje(texto, tipo) {
    const chatMessages = document.getElementById('chatMessages');
    const messageItem = document.createElement('li');
    messageItem.classList.add(tipo === 'user' ? 'text-right' : 'text-left');
    messageItem.textContent = texto;
    chatMessages.appendChild(messageItem);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplaza hacia abajo el chat
}

// Simulación de la obtención de recetas
function obtenerRecetas(ingrediente) {
    // Aquí deberías implementar la lógica para buscar recetas
    // Esta es una simulación de respuesta
    const recetas = [
        `Receta de Ensalada de ${ingrediente}`,
        `Sopa de ${ingrediente}`,
        `Tortilla de ${ingrediente}`
    ];

    // Simula una respuesta después de un breve retraso
    setTimeout(() => {
        recetas.forEach(receta => mostrarMensaje(receta, 'bot'));
    }, 500);
}

// Función para cerrar el modal de búsqueda de recetas
function closeBuscarRecetasModal() {
    const modal = document.getElementById('buscarRecetasModal');
    modal.classList.add('hidden'); // Esconde el modal
}


// Función para buscar recetas por ingrediente
function buscarRecetas() {
    const ingredient = document.getElementById('ingredient').value.toLowerCase(); // Obtiene el ingrediente ingresado en minúsculas
    const recipeResults = document.getElementById('recipeResults'); // Obtiene el contenedor de resultados

    const recetas = [ // Lista de recetas y sus ingredientes
        { name: 'Ensalada de Frutas', ingredients: ['frutas', 'manzana', 'plátano'] },
        { name: 'Pasta Primavera', ingredients: ['pasta', 'vegetales'] },
        { name: 'Tacos de Pollo', ingredients: ['pollo', 'tortilla', 'salsa'] },
        { name: 'Sopa de Verduras', ingredients: ['verduras', 'zanahoria', 'papa'] }
    ];

    recipeResults.innerHTML = ''; // Limpia los resultados anteriores

    const filteredRecetas = recetas.filter(receta =>
        receta.ingredients.includes(ingredient) // Filtra las recetas que incluyen el ingrediente
    );

    if (filteredRecetas.length > 0) { // Si se encontraron recetas
        filteredRecetas.forEach(receta => {
            const li = document.createElement('li'); // Crea un elemento de lista
            li.textContent = receta.name; // Asigna el nombre de la receta
            recipeResults.appendChild(li); // Agrega el elemento a la lista
        });
    } else {
        recipeResults.innerHTML = '<li>No se encontraron recetas con ese ingrediente</li>'; // Muestra un mensaje si no se encuentran recetas
    }
}
// Función para abrir el modal de edición del perfil
function openEditModal() {
    document.getElementById("editModal").classList.remove("hidden"); // Muestra el modal de edición
}

// Función para cerrar el modal de edición del perfil
function closeEditModal() {
    document.getElementById("editModal").classList.add("hidden"); // Oculta el modal de edición
}

// Función para guardar los cambios en el perfil
function saveProfileChanges(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const allergies = document.getElementById("allergies").value;

    // Verifica que todos los campos estén llenos
    if (!name || !email || !phone || !age || !weight || !height || !allergies) {
        alert("Por favor, completa todos los campos."); // Alerta si algún campo está vacío
        return; // Sale de la función si hay campos vacíos
    }

    // Muestra el mensaje de confirmación
    document.getElementById('editConfirmationMessage').classList.remove('hidden'); // Muestra mensaje de confirmación
    document.getElementById("editProfileForm").reset(); // Limpia el formulario

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
        confirmationMessage.classList.add("hidden"); // Oculta el mensaje de confirmación
    }, 3000);
}

// Función para abrir el modal de edición
function openEditarModal() {
    document.getElementById("editarModal").classList.remove("hidden"); // Muestra el modal de edición
    console.log("Modal abierto"); // Mensaje en consola
}

// Función para cerrar el modal de edición
function closeEditarModal() {
    document.getElementById("editarModal").classList.add("hidden"); // Oculta el modal de edición
    console.log("Modal cerrado"); // Mensaje en consola
}

// Función para mostrar la imagen seleccionada en vista previa
function previewImage(event) {
    const input = event.target; // Obtiene el input de la imagen
    const reader = new FileReader(); // Crea un nuevo FileReader

    // Función que se ejecuta cuando la imagen se carga
    reader.onload = function () {
        const profilePreview = document.getElementById("profilePreview"); // Obtiene el elemento de vista previa
        profilePreview.src = reader.result; // Muestra la nueva imagen seleccionada en el modal
        console.log("Imagen seleccionada y mostrada en vista previa"); // Mensaje en consola
    };

    // Verifica si hay archivos seleccionados y los lee
    if (input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]); // Leer el archivo de imagen como una URL de datos
    }
}
// Función para guardar la nueva imagen como foto de perfil principal
function guardarImagen() {
    const profilePreview = document.getElementById("profilePreview"); // Obtiene la vista previa de la imagen
    const mainProfilePicture = document.getElementById("mainProfilePicture"); // Obtiene la imagen de perfil principal
    
    // Actualizar la imagen de perfil principal con la vista previa
    mainProfilePicture.src = profilePreview.src; 
    console.log("Imagen de perfil principal actualizada"); // Mensaje en consola

    // Cerrar el modal de edición
    closeEditarModal();
}

// Ejemplo de productos con fechas de caducidad
const inventory = [
    { code: "F-001", name: "Manzanas", quantity: 3, expirationDate: "2024-11-05" }, // Producto próximo a vencer
    { code: "P-002", name: "Pollo", quantity: 1, expirationDate: "2024-10-30" },   // Producto vencido
];

// Función para abrir el modal de notificaciones
function openNotifiModal() {
    const modal = document.getElementById('notificationModal'); // Obtiene el modal de notificaciones
    modal.classList.remove('hidden'); // Muestra el modal
    populateNotifications(); // Llama a la función para llenar las notificaciones en el modal
}

// Función para cerrar el modal de notificaciones
function closeNotifiModal() {
    const modal = document.getElementById('notificationModal'); // Obtiene el modal de notificaciones
    modal.classList.add('hidden'); // Esconde el modal
}

// Función para llenar el modal con las notificaciones
function populateNotifications() {
    const notificationList = document.getElementById('notificationList'); // Obtiene la lista de notificaciones
    notificationList.innerHTML = ''; // Limpia la lista actual

    const today = new Date(); // Obtiene la fecha actual
    let nearExpiryHtml = ''; // Variable para almacenar HTML de productos próximos a vencer
    let expiredHtml = ''; // Variable para almacenar HTML de productos vencidos

    // Itera sobre cada producto en el inventario
    inventory.forEach(product => { 
        const expirationDate = new Date(product.expirationDate); // Convierte la fecha de caducidad a objeto Date
        if (expirationDate < today) {
            // Producto vencido
            expiredHtml += `<p style="color: red;">Código: ${product.code}, Nombre: ${product.name}, Cantidad: ${product.quantity}, Venció el: ${expirationDate.toLocaleDateString()}</p>`;
        } else if ((expirationDate - today) / (1000 * 60 * 60 * 24) <= 5) {
            // Producto próximo a vencer (5 días)
            nearExpiryHtml += `<p style="color: orange;">Código: ${product.code}, Nombre: ${product.name}, Cantidad: ${product.quantity}, Vencerá el: ${expirationDate.toLocaleDateString()}</p>`;
        }
    });

    // Agregar títulos y contenido al modal de notificaciones
    if (nearExpiryHtml) {
        notificationList.innerHTML += `<h3 style="color: orange;">Productos próximos a vencer:</h3>${nearExpiryHtml}`;
    } else {
        notificationList.innerHTML += `<h3 style="color: orange;">No hay productos próximos a vencer.</h3>`;
    }

    if (expiredHtml) {
        notificationList.innerHTML += `<h3 style="color: red;">Productos vencidos:</h3>${expiredHtml}`;
    } else {
        notificationList.innerHTML += `<h3 style="color: red;">No hay productos vencidos.</h3>`;
    }
}

// Agregar un evento de clic en el fondo del modal para cerrarlo
document.querySelector('.modal-overlay').addEventListener('click', closeNotifiModal); // Cierra el modal al hacer clic en el fondo

// Función para abrir el modal "Acerca de"
function openAcercaModal() {
    const modal = document.getElementById('acercaModal'); // Obtiene el modal "Acerca de"
    modal.classList.remove('hidden'); // Muestra el modal
}

// Función para cerrar el modal "Acerca de"
function closeAcercaModal() {
    const modal = document.getElementById('acercaModal'); // Obtiene el modal "Acerca de"
    modal.classList.add('hidden'); // Esconde el modal
}


const productsDatabase = [
    { barcode: "1234567890", category: "Fruta", name: "Manzana", weight: "200g", expiryDate: "2024-12-01"},
    { barcode: "0987654321", category: "Verdura", name: "Zanahoria", weight: "100g", expiryDate: "2024-10-20"},
    { barcode: "1122334455", category: "Proteína", name: "Pollo", weight: "1L", expiryDate: "2024-10-15"},
    { barcode: "1234453434", category: "Abarrote", name: "Arroz", weight: "1kg", expiryDate: "2025-01-01"},
    { barcode: "3344556677", category: "Fruta", name: "Banana", weight: "120g", expiryDate: "2024-09-30"},
    { barcode: "4455667788", category: "Verdura", name: "Brocoli", weight: "250g", expiryDate: "2024-11-15"},
    { barcode: "5566778899", category: "Proteína", name: "Carne de res", weight: "2L", expiryDate: "2024-10-25"},
    { barcode: "6677889900", category: "Abarrote", name: "Lentejas", weight: "500g", expiryDate: "2024-12-15"},
    { barcode: "7788990011", category: "Fruta", name: "Naranja", weight: "2L", expiryDate: "2024-10-10"},
    { barcode: "8899001122", category: "Proteína", name: "Huevo", weight: "6", expiryDate: "2024-11-10"}
];
let addedProducts = [];  // Array para almacenar los productos añadidos (por código o manual)

// Funciones para abrir y cerrar el modal principal de agregar productos
function openAgregarModal() {
    // Muestra el modal de agregar productos eliminando la clase 'hidden'
    document.getElementById("agregarModal").classList.remove("hidden");
}

function closeAgregarModal() {
    // Oculta el modal de agregar productos añadiendo la clase 'hidden'
    document.getElementById("agregarModal").classList.add("hidden");
}
// Funciones para abrir y cerrar los modales de agregar por código de barra o manual
function openBarcodeModal() {
// Cierra el modal de agregar productos y muestra el modal para agregar por código de barra
closeAgregarModal();
document.getElementById("barcodeModal").classList.remove("hidden");
document.getElementById('barcodeConfirmationMessage').classList.add('hidden'); // Oculta el mensaje de confirmación
}

function closeBarcodeModal() {
// Oculta el modal de agregar productos por código de barra
document.getElementById("barcodeModal").classList.add("hidden");
}

function closeBarcodeModal() {
// Oculta el modal de agregar productos por código de barra
document.getElementById("barcodeModal").classList.add("hidden");
// Limpiar mensaje de confirmación y el campo de entrada
document.getElementById("barcodeConfirmationMessage").classList.add("hidden");
document.getElementById("barcode").value = '';
}

function addBarcodeProduct() {
const barcode = document.getElementById("barcode").value.trim();
if (barcode) {
    searchAndAddProduct(barcode);
} else {
    alert("Por favor, ingresa un código de barra.");
}
}
let currentProduct = null;

function closeBarcodeModal() {
    // Oculta el modal de agregar productos por código de barra
    document.getElementById("barcodeModal").classList.add("hidden");
    // Limpiar los campos y mensajes
    document.getElementById("barcode").value = '';
    document.getElementById("productInfo").classList.add("hidden");
    document.getElementById("productNotFoundMessage").classList.add("hidden");
    document.getElementById("barcodeConfirmationMessage").classList.add("hidden");
}

function addBarcodeProduct() {
    const barcode = document.getElementById("barcode").value.trim();
    if (barcode) {
        // Ocultar mensaje de confirmación cada vez que se busca un nuevo producto
        document.getElementById("barcodeConfirmationMessage").classList.add("hidden");
        searchAndAddProduct(barcode);
    } else {
        alert("Por favor, ingresa un código de barra.");
    }
}

function searchAndAddProduct(barcode) {
    // Buscar el producto en la base de datos
    const product = productsDatabase.find(item => item.barcode === barcode);

    if (product) {
        // Mostrar la información del producto en el modal
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productCategory").textContent = product.category;
        document.getElementById("productWeight").textContent = product.weight;
        document.getElementById("productExpiryDate").textContent = product.expiryDate;
        
        // Mostrar el contenedor de información del producto y ocultar el mensaje de error
        document.getElementById("productInfo").classList.remove("hidden");
        document.getElementById("productNotFoundMessage").classList.add("hidden");
        
        // Guardar el producto actual para referencia en confirmación
        currentProduct = product;
    } else {
        // Mostrar mensaje de error si el producto no se encuentra
        document.getElementById("productNotFoundMessage").classList.remove("hidden");
        document.getElementById("productInfo").classList.add("hidden");
        currentProduct = null;
    }
}

function confirmAddProduct() {
    if (currentProduct && !addedProducts.some(item => item.barcode === currentProduct.barcode)) {
        addedProducts.push(currentProduct);
        // Mostrar mensaje de confirmación solo cuando el producto se guarda exitosamente
        document.getElementById("barcodeConfirmationMessage").classList.remove("hidden");
    } else if (currentProduct) {
        alert("El producto ya está en la lista de añadidos.");
    }
}


// Abre el modal para agregar producto manualmente y genera un código de barras único
function openManualModal() {
    document.getElementById("manualModal").classList.remove("hidden");
    document.getElementById("manualConfirmationMessage").classList.add("hidden");
    document.getElementById("manualProductForm").reset();
    
    // Generar un código de barras aleatorio
    const generatedBarcode = generateBarcode();
    document.getElementById("manualBarcode").value = generatedBarcode;
}

// Cierra el modal para agregar producto manualmente
function closeManualModal() {
    document.getElementById("manualModal").classList.add("hidden");
}

// Genera un código de barras único de 10 dígitos
function generateBarcode() {
    return Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
}

// Agrega el producto manualmente al array addedProducts
function addManualProduct() {
    const name = document.getElementById("manualName").value.trim();
    const category = document.getElementById("manualCategory").value.trim();
    const weight = document.getElementById("manualWeight").value.trim();
    const expiryDate = document.getElementById("manualExpiryDate").value;
    const barcode = document.getElementById("manualBarcode").value.trim();

    if (!name || !category || !weight || !expiryDate) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Verifica si el producto ya existe en addedProducts
    if (addedProducts.some(item => item.barcode === barcode)) {
        alert("Este producto ya está en la lista de añadidos.");
        return;
    }


    // Crea el producto y lo agrega al array addedProducts
    const product = { barcode, name, category, weight, expiryDate};
    addedProducts.push(product);

    // Muestra el mensaje de confirmación
    document.getElementById("manualConfirmationMessage").classList.remove("hidden");
    // Limpiar el formulario después de guardar el producto
    document.getElementById("manualProductForm").reset();
     // Generar un nuevo código de barras después de limpiar el formulario
const newBarcode = generateBarcode();
document.getElementById("manualBarcode").value = newBarcode;
    // Actualiza la lista de productos añadidos en el modal
    updateAddedProductsList();
    
}
//Funcion para abrir el Modal de despensa
function openDespensaModal() {
    // Obtiene el elemento HTML donde se mostrarán los productos añadidos
    const addedProductsList = document.getElementById("addedProductsList");
    
    // Limpia el contenido previo del elemento para evitar duplicados
    addedProductsList.innerHTML = "";

    // Verifica si hay productos en la lista "addedProducts"
    if (addedProducts.length > 0) {
        // Itera sobre cada producto en la lista "addedProducts"
        addedProducts.forEach(product => {
            // Crea un nuevo elemento <div> para representar cada producto
            const productItem = document.createElement("div");
            
            // Agrega clases de estilo a cada producto para diseño y formato
            productItem.classList.add("p-2", "border", "border-gray-300", "rounded", "mb-2");

            // Define el contenido HTML de "productItem" usando interpolación de valores
            // Muestra los detalles del producto: código, nombre, categoría, peso y fecha de expiración
            productItem.innerHTML = `
                <p><strong>Codigo:</strong> ${product.barcode}</p>
                <p><strong>Nombre:</strong> ${product.name}</p>
                <p><strong>Categoría:</strong> ${product.category}</p>
                <p><strong>Peso:</strong> ${product.weight}</p>
                <p><strong>Fecha de expiración:</strong> ${product.expiryDate}</p>
            `;
            
            // Añade el elemento "productItem" al contenedor de la lista de productos
            addedProductsList.appendChild(productItem);
        });
    } else {
        // Si no hay productos, muestra un mensaje indicando que la despensa está vacía
        addedProductsList.innerHTML = "<p class='text-gray-500'>No hay productos en la despensa.</p>";
    }

    // Muestra el modal de la despensa quitando la clase "hidden"
    document.getElementById("despensaModal").classList.remove("hidden");
}

function closeDespensaModal() {
    // Oculta el modal de la despensa añadiendo la clase "hidden"
    document.getElementById("despensaModal").classList.add("hidden");
}// Función para abrir el modal
function openRetirarModal() {
// Muestra la lista de productos añadidos
const retirarProductList = document.getElementById("retirarProductList");
retirarProductList.innerHTML = ''; // Limpiar lista actual

// Llena la lista con los productos añadidos
addedProducts.forEach((product, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - ${product.category} - ${product.weight} - Exp: ${product.expiryDate}`;
    
    // Añade un botón para seleccionar y retirar el producto
    const retirarButton = document.createElement("button");
    retirarButton.textContent = "Retirar";
    retirarButton.classList.add("bg-red-500", "text-white", "py-1", "px-2", "ml-4", "rounded");
    retirarButton.onclick = function() {
        selectProductForRetirar(index);
    };
    
    listItem.appendChild(retirarButton);
    retirarProductList.appendChild(listItem);
});

// Muestra el modal de retiro
document.getElementById("retirarModal").classList.remove("hidden");
}

// Cierra el modal de retirar
function closeRetirarModal() {
document.getElementById("retirarModal").classList.add("hidden");
}

// Selecciona un producto para retirar
function selectProductForRetirar(index) {
// Guarda el índice del producto seleccionado para retirar
window.productToRetirar = index;

// Muestra el botón de confirmación para retirar el producto
document.getElementById("retirarProductButton").classList.remove("hidden");
}

// Retira el producto seleccionado
function retirarProducto() {
if (window.productToRetirar !== undefined) {
    // Obtiene el producto que se eliminará
    const product = addedProducts[window.productToRetirar];
    
    // Elimina el producto del array addedProducts
    addedProducts.splice(window.productToRetirar, 1);

    // Muestra el mensaje de producto eliminado dentro del modal
    showProductRemovedMessage(product.name);

    // Actualiza la lista de productos visibles en el modal
    updateAddedProductsList(); // Actualiza la lista de productos visibles

    // Vuelve a ocultar el botón de retirar, ya que el producto fue eliminado
    document.getElementById("retirarProductButton").classList.add("hidden");
} else {
    alert("No se seleccionó ningún producto para retirar.");
}
}

// Muestra el mensaje de "Producto eliminado" dentro del modal
function showProductRemovedMessage(productName) {
const messageContainer = document.getElementById("productRemovedMessage");

// Muestra el mensaje con el nombre del producto eliminado dentro del modal
messageContainer.textContent = `Producto eliminado: ${productName}`;
messageContainer.classList.remove("hidden"); // Muestra el mensaje

// Oculta el mensaje después de 3 segundos
setTimeout(() => {
    messageContainer.classList.add("hidden");
}, 1000);
}

// Actualiza la lista de productos visibles en el modal (por ejemplo, en un modal de despensa)
function updateAddedProductsList() {
// Actualiza la lista de productos retirados
const retirarProductList = document.getElementById("retirarProductList");
retirarProductList.innerHTML = ''; // Limpiar la lista actual

// Llena la lista con los productos restantes
addedProducts.forEach((product, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - ${product.category} - ${product.weight} - Exp: ${product.expiryDate}`;
    
    // Añade un botón para seleccionar y retirar el producto
    const retirarButton = document.createElement("button");
    retirarButton.textContent = "Retirar";
    retirarButton.classList.add("bg-red-500", "text-white", "py-1", "px-2", "ml-4", "rounded");
    retirarButton.onclick = function() {
        selectProductForRetirar(index);
    };
    listItem.appendChild(retirarButton);
    retirarProductList.appendChild(listItem);
});
}

