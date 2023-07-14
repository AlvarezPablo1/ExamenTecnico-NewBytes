# nuxt-2-challenge

## Build Setup

```bash
# create .env a partir del example
$ cp .env-example .env

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

```

## Ejercicio

1. Clone el repositorio cree una nueva rama y siga las instrucciones del [build setup](##Build-Setup)

2.En `pages/index.vue` existe una variable computada llamada `productosOrdenados`, debe ordenar los elementos

    El orden sera de menor a mayor precio `price.finalPrice`

3. En `componets/Producto.vue` debe construir el componente de manera tal que muestre:
   - Nombre del producto: `description`
   - Marca del producto: `brandName`
   - Precio final: `price.finalPrice`
     este componente sera utilizado para mostrar los `productosOrdenados` de forma iterada
4. Utilice el selector de manera tal que pueda cambiar el limit de la request que se encuentra en `store/busquedas.js` de manera que cada que hace click en alguna opcion debe cambiar la cantidad de productos mostrados (limit no debe ser un estado)

5. Si gusta resalte los precios de manera tal que se diferencien por rangos ejemplo:

- [0-10000] color verde
- (10000-25000] color amarillo
- (25000-100000] color naranja
- mayores a 100000 color rojo

  piense no solo color de texto sino una forma distinta de resaltarla agregandole estilo

  ### Sea creativo!

---

Documentacion de Antd

[documentacion](https://1x.antdv.com/components/button/)

Documentación de nuxt 2

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
