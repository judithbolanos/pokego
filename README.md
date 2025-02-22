# PokéGo

Este proyecto es una web estática construida con Astro, que consume la PokeAPI (https://pokeapi.co/) para mostrar información detallada sobre Pokémons. Se utiliza TypeScript para el desarrollo, SolidJS para la gestión de favoritos y se despliega en GitHub Pages.

## Características principales

* **Generación estática de páginas de Pokémon:** Cada página de Pokémon se genera estáticamente durante el proceso de build, utilizando Astro y la PokeAPI. Esto garantiza un rendimiento óptimo y una excelente experiencia de usuario.
* **Paginación estática:** Se implementa la paginación estática para navegar eficientemente a través de la lista de Pokémons.
* **Gestión de favoritos con SolidJS y LocalStorage:** Los usuarios pueden guardar sus Pokémons favoritos utilizando LocalStorage. Un componente de SolidJS se encarga de la interacción con el LocalStorage y la actualización de la interfaz de usuario.
* **TypeScript:** El proyecto está desarrollado en TypeScript, lo que proporciona seguridad de tipos y facilita el mantenimiento del código.

## Tecnologías utilizadas

* Astro
* TypeScript
* SolidJS
* PokeAPI
* LocalStorage
* GitHub Pages

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                                    |
| :------------------------ | :---------------------------------------------------------|
| `npm install`             | Instalar dependencias                                     |
| `npm run dev`             | Iniciar el servidor de manera local `localhost:4321`      |
| `npm run build`           | Se realiza el build en la carpeta `./dist/`               |
| `npm run preview`         | Se puede visualizar el preview del build                  |

## Enlaces
Puedes ver este proyecto en el siguiente link:<a href="https://judithbolanos.github.io/pokego/" target="_blank" rel="noopener noreferrer">https://judithbolanos.github.io/pokego/</a>.


## Imagenes
![pokelist](https://judithbl.com/uploads/pokelist.png)

![pokefav](https://judithbl.com/uploads/pokefav.png)

![poke single](https://judithbl.com/uploads/pokesingle.png) 