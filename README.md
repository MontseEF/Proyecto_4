# Proyecto 4
## Introducción
En este proyecto se nos solicitó crear una aplicación de gestión para reservas hoteleras, utilizando los recursos de Node.js y Express. 
También debía integrar las 4 operaciónes CRUD y otras 6 relacionadas a los filtros.
Así que a lo largo de este camino iré presentando cómo realicé el trabajo.

## Herramientas utilizadas
- Node.js
- Express
- .env
- JSON
- .gitignore
- Postman y Thunder Client (para relizar pruebas)

  ## Fases del proyecto
  - Fase 1 (Creación de estructura) : Dentro de esta fase, me encargué de darle estructura a este proyecto. Utilizando la herramienta de Node.js, Express y JSON.
  Se formaron las carpetas y archivos: .env, package.json, routes, node_modules, controllers, etc

  - Fase 2 (Creación de códigos y rutas) : En esta fase me encagué de empezar a fabricar el código. A través del codigo implementar las funcionalidades.
  Dentro de las funcionalidades podemos encontrar:


        | Método | Ruta                | Función                    |
        | ------ | ------------------- | -------------------------- |
        | POST   | `/api/bookings`     | Crear nueva reserva        |
        | GET    | `/api/bookings`     | Obtener todas las reservas |
        | GET    | `/api/bookings/:id` | Obtener una reserva por ID |
        | PUT    | `/api/bookings/:id` | Actualizar una reserva     |
        | DELETE | `/api/bookings/:id` | Eliminar una reserva       |


  - Fase 3 (Pruebas): En esta parte me dediqué a porbar todas las funcionalidades del CRUD. Para ello utilicé Postman y Thunder Client (para los query, mayormente)


  ## Pruebas

  Aquí adjuntaré todas las herramientas necesarias para poder realizar el testing de la API.


  1- Iniciar el servidor : Node server.js

  2- Probar los endpoints con datos tipo:

            {
              "id": 1752454505387,
              "hotel": "Hotel Olympia",
              "tipo_habitacion": "suite",
              "fecha_entrada": "20-07-2025",
              "fecha_salida": "22-07-2025",
              "num_huespedes": 2,
              "estado": "confirmada"
            },

  3- Ejemplos para probar adicionalmente los Queries:


        | Método | Ruta (con queries)                                           | Descripción                     |
      | ------ | ------------------------------------------------------------ | ------------------------------- |
      | GET    | `/api/bookings?hotel=Hotel Paraíso`                          | Filtrar por hotel               |
      | GET    | `/api/bookings?tipo_habitacion=suite`                        | Filtrar por tipo de habitación  |
      | GET    | `/api/bookings?estado=pendiente`                             | Filtrar por estado              |
      | GET    | `/api/bookings?num_huespedes=5`                              | Filtrar por número de huéspedes |
      | GET    | `/api/bookings?fecha_inicio=2025-07-01&fecha_fin=2025-07-30` | Filtrar por rango de fechas     |



  ## Posibles mejoras futuras
  
  - Implementar Swagger para documentación automática de la API
  - Desplegar en render.com


  ## Conclusión

    Fue una actividad relamente desafiante, tuve que invertir bastante tiempo. Sin embargo, fue entretenido ver los resultados y aprendí bastante de esta experiencia.

   Muchas gracias.
