#  UnaHur Anti-Social Net
#  Grupo: 404

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Sl6aWwgf)

> **💻Backend para una red social, creada para la materia Estrategias de Persistencia - UNAHUR.💻**

---

## 📌 Descripción del proyecto

UnaHur Anti-Social Net es una red social que permite a los usuarios compartir posts con imágenes, tags y recibir comentarios. El proyecto busca replicar funcionalidades comunes de redes sociales, priorizando una arquitectura limpia, flexible y bien documentada para su despliegue backend.

---

## ⚙️ Tecnologías utilizadas

- Node.js + Express
- Sequelize ORM + SQLite
- Swagger para documentación
- Postman (colecciones de prueba)

---

## 🧱 Entidades principales

| Entidad       | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **User**      | Usuario del sistema. `nickName` debe ser único.                             |
| **Post**      | Publicación con descripción obligatoria y fecha. Puede tener imágenes.      |
| **Post_Images**| Imágenes asociadas a un post. Se almacena la URL.                         |
| **Comment**   | Comentarios en publicaciones. Se ocultan si superan cierta antigüedad.      |
| **Tag**       | Etiquetas asociadas a publicaciones. Relación muchos a muchos.             |

---

## 📁 Estructura del proyecto
```
📁 src/
├── 📁 controllers/ # Lógica de negocio por entidad
├── 📁 db/ # Modelos Sequelize y configuración de la base de datos
├── 📁 docs/ # Documentación de la API en Swagger (YAML)
├── 📁 middlewares/ # Validaciones, manejo de errores, etc.
├── 📁 routes/ # Archivos de rutas organizados por entidad
├── 📁 schemas/ # Esquemas de validación y DTOs
├── 📁 assets/ # Imágenes o recursos gráficos para el proyecto
├── main.js # Punto de entrada de la app Express
```
## 📡 Endpoints 
A continuación se detallan los principales endpoints organizados por entidad:

# 👤 Usuario (/user)
```
Método  |  Endpoint	                    |  Descripción
GET	    |  /getUser/:id	                 |  Obtener usuario por ID
POST	|  /createUser	                 |  Crear nuevo usuario
PUT	    |  /updateNickName/:id	         |  Actualizar nickname de un usuario
PUT     |  /updateEmail/:id	             |  Actualizar email de un usuario
POST	|  /seguirUsuario/:id/:idASeguir |  Seguir a otro usuario
DELETE  |  /deleteUser/:id	             |  Eliminar usuario
```
# 📝 Post (/post)
```
Método  |  Endpoint	          |    Descripción
GET	    | /getPost/:id	      | Obtener post por ID
GET	    | /getAllUserPost/:id | Obtener todos los posts de un usuario
POST	| /createPost	      |    Crear un nuevo post
PUT	    | /updatePost/:id	  | Actualizar contenido de un post
DELETE  | /deletePost/:id	  | Eliminar un post

# 🖼️ Imagen (/image)
Método |  Endpoint             | Descripción
GET	   |  /getImage/:id	       | Obtener imagen por ID
GET    |  /getAllPostIMage/:id | Obtener todas las imágenes de un post
POST   |  /addImage/:id	       | Agregar una imagen a un post
POST   |  /addAllImages/:id    | Agregar múltiples imágenes a un post
PUT	   |  /updateImage/:id     | Actualizar la URL de una imagen
DELETE |  /deleteImage/:id	   | Eliminar una imagen
```
# 💬 Comentario (/comment)
```
Método | Endpoint	          |  Descripción
GET	   | /getComment/:id	  | Obtener comentario por ID
GET	   | /getAllComments/:id  | Obtener todos los comentarios de un post
POST   | /createComment/:id	  |  Crear comentario en un post
PUT	   | /updateComment/:id	  |  Actualizar un comentario
DELETE | /deleteComment/:id	  |  Eliminar comentario
```
# 🏷️ Etiquetas (/tag)
```
Método | Endpoint	                     |  Descripción
GET	   |  /getTag/:id	                 |  Obtener una etiqueta por ID
POST   |  /createTag	                 |  Crear nueva etiqueta
PUT	   |  /updateTag/:id	             |  Actualizar contenido de una etiqueta
PUT	   |  /addTagToPost/:idPost/:idTag	 |  Agregar una etiqueta a un post
PUT	   |  /addAllTagsToPost/:idPost	     |  Agregar múltiples etiquetas a un post
DELETE |  /deleteTag/:id	             |  Eliminar etiqueta
```
## 🧪 Colecciones de prueba
Se incluye una colección de Postman para facilitar el testeo del backend:
📁 /src/docs/Trabajo Practico Grupo 404.postman_collection.json

## 💡 Bonus implementados
👥 Propuesta de modelo de seguidores entre usuarios (followers tabla N:N)
