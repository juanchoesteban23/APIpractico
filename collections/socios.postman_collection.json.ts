{
  "info": {
    
    "name": "Socios API",
    "description": "Pruebas para la entidad Socios",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Crear un socio válido",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"username\": \"ejemplo\",\n  \"email\": \"ejemplo@gmail.com\",\n  \"birthdate\": \"1990-01-01\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/members",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["members"]
        }
      },
      "response": []
    },
    {
      "name": "Obtener todos los socios",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/members",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["members"]
        }
      },
      "response": []
    },
    {
      "name": "Actualizar un socio",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"username\": \"nuevo_nombre\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/members/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["members", "1"]
        }
      },
      "response": []
    },
    {
      "name": "Eliminar un socio",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/members/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["members", "1"]
        }
      },
      "response": []
    }
  ]
}