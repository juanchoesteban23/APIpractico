{
  "info": {
    
    "name": "Clubs API",
    "description": "Pruebas para la entidad Clubs",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Crear un club válido",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Club Ejemplo\",\n  \"foundationDate\": \"2000-01-01\",\n  \"image\": \"imagen-url\",\n  \"description\": \"Descripción corta\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/clubs",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["clubs"]
        }
      },
      "response": []
    },
    {
      "name": "Obtener todos los clubs",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/clubs",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["clubs"]
        }
      },
      "response": []
    },
    {
      "name": "Actualizar un club",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Nuevo Nombre\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/clubs/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["clubs", "1"]
        }
      },
      "response": []
    },
    {
      "name": "Eliminar un club",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/clubs/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["clubs", "1"]
        }
      },
      "response": []
    }
  ]