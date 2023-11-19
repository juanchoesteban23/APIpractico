{
  "info": {
    "name": "Asociación API",
    "description": "Pruebas para la asociación Club-Socio",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Asociar un socio a un club",
      "request": {
        "method": "POST",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/clubs/1/members/2",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["clubs", "1", "members", "2"]
        }
      },
      "response": []
    },
    {
      "name": "Obtener los socios de un club",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/clubs/1/members",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["clubs", "1", "members"]
        }
      },
      "response": []
    },
    {
      "name": "Actualizar los socios de un club",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "[\n  {\"username\": \"nuevo_socio_1\"},\n  {\"username\": \"nuevo_socio_2\"}\n]"
        },
        "url": {




