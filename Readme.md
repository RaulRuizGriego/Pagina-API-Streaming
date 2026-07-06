En estre proyeto se implemento a la pagina de streaming hecha previamente funciones de informacion bajadas desde una API, 

La estructura de los datos es la siguiente
{
        "id": 7,                                  
        "titulo": "Scarface",                       
        "categoria": "Crimen / Drama",
        "anio": 1983,
        "poster": "/imgs/Scarface.png",
        "match": 94,
        "clasificacion": "18+",
        "duracion": "2 h 50 min",
        "sinopsis": "En 1980, el refugiado cubano Tony Montana llega a Miami sin nada y rápidamente asciende en el inframundo criminal para convertirse en un poderoso y despiadado capo de la droga, pero su propia ambición y paranoia amenazan su imperio.",
        "elenco": "Al Pacino, Michelle Pfeiffer, Steven Bauer.",
        "director": "Brian De Palma"
    }


    Para Agregar mas catalogo a la pagina se le agregan mas peliculas desde la misma api, ejemplo del Main.py

    DB_PELICULAS = [
    {
        "id": 1,
        "titulo": "Interestelar",
        "categoria": "Ciencia Ficción",
        "anio": 2014,
        "poster": "/imgs/interestelar.jpg",
        "match": 95,
        "clasificacion": "13+",
        "duracion": "2 h 49 min",
        "sinopsis": "Un grupo de científicos y exploradores espaciales se embarcan en un viaje espacial definitivo para encontrar un nuevo hogar para la humanidad antes de que la Tierra colapse por completo.",
        "elenco": "Matthew McConaughey, Anne Hathaway, Jessica Chastain.",
        "director": "Christopher Nolan"
    },
    {Se copia y se agrega una pelicula nueva a este array y automaticamete aparecera en la pagina}