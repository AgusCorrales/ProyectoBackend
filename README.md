# Backend de Tienda Online 💻

Este módulo contiene varios controladores para la gestión de usuarios, categorías, pedidos y productos en una aplicación. Cada controlador proporciona funciones para realizar operaciones específicas en la base de datos relacionadas con su entidad correspondiente.

## Dependencias

- Node.js
- Express.js
- Sequelize
- bcryptjs
- jsonwebtoken


## Diagrama

<img width="908" alt="Captura de pantalla 2024-05-07 a la(s) 13 46 11" src="https://github.com/AgusCorrales/ProyectoBackend/assets/162991987/a04f97fa-f5ea-4f1d-b946-24c80a9399c3">


## Relaciones
- **Users-Orders: Es una relacion de uno a muchos.**
- **Orders-Products: Es una relacion de muchos a muchos.**
- **Products-Categories: Es una relacion de muchos a muchos**


## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm: npm install
3. Asegúrate de tener una base de datos configurada y que los detalles de conexión estén actualizados en el archivo `config_example.json`.



## Controlador de Usuario
Proporciona funciones para la gestión de usuarios en la aplicación, incluyendo la creación, autenticación, obtención, eliminación y desconexión de usuarios.


## Controlador de Categoría
Gestiona las categorías de productos en la aplicación, permitiendo la creación, actualización, eliminación y obtención de categorías.


## Controlador de Pedido
Permite la creación de nuevos pedidos en la aplicación, así como la obtención de todos los pedidos existentes.


## Controlador de Producto
Gestiona los productos disponibles en la aplicación, permitiendo la creación, actualización, eliminación y obtención de productos, así como filtrar por nombre, precio y ordenar por precio de forma descendente.




## Notas adicionales
Cada controlador utiliza Sequelize para interactuar con la base de datos y ofrece diversas funcionalidades relacionadas con su entidad específica.
Asegúrate de ajustar las rutas y configuraciones de la base de datos según las necesidades específicas de tu aplicación.
¡Gracias por utilizar estos controladores en tu aplicación!
