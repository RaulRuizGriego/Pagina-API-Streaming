from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
    "null",  
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PERSONAS = [
        {"id":1, "nombre":"Jose", "edad":35},
        {"id":2, "nombre":"Armando", "edad":28},
        {"id":3, "nombre":"Emma Frost", "edad":30},
        {"id":4, "nombre":"Scott Summers", "edad":27},
        {"id":5, "nombre":"Wolvering", "edad":25}
    ];

@app.get("/api/personas")
def getPersonas():
    return DB_PERSONAS;

@app.get("/api/persona")
def getPersona():
    return {"id":1, "nombre":"Emma Frost", "edad":30}

@app.get("/api/persona_r/{id}")
def get_persona_by_id_r(id: int = None):
    for persona in DB_PERSONAS:
        if persona["id"] == id:
            return persona
    return {"error":"Valor no encontrado"}

@app.get("/api/persona_q")
def get_persona_by_id_q(id:int = None, matricula:int=None):
    print(matricula)
    if id is None:
        return {"error":"No existe el parámetro id"}
    for persona in DB_PERSONAS:
        if persona["id"] == id:
            return persona
    return {"error":"Id no localizado"}


# ATOS DE PELICULAS 
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
    {
        "id": 2,
        "titulo": "El Origen",
        "titulo_completo": "El Origen (Inception)",
        "categoria": "Acción / Suspenso",
        "anio": 2010,
        "poster": "/imgs/El origen.jpg",
        "match": 92,
        "clasificacion": "16+",
        "duracion": "2 h 28 min",
        "sinopsis": "Un ladrón profesional que se infiltra en los sueños de las personas para robar secretos corporativos se enfrenta a la misión inversa: implantar una idea en el subconsciente de un heredero.",
        "elenco": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page.",
        "director": "Christopher Nolan"
    },
    {
        "id": 3,
        "titulo": "The Dark Knight",
        "categoria": "Acción / Drama",
        "anio": 2008,
        "poster": "/imgs/batman.jpg",
        "match": 98,
        "clasificacion": "13+",
        "duracion": "2 h 32 min",
        "sinopsis": "Con la ayuda del teniente Jim Gordon y el fiscal de distrito Harvey Dent, Batman busca desmantelar las organizaciones criminales restantes que plagan las calles de Ciudad Gótica, pero se topa con el Guasón.",
        "elenco": "Christian Bale, Heath Ledger, Aaron Eckhart.",
        "director": "Christopher Nolan"
    },
    {
        "id": 4,
        "titulo": "Pulp Fiction",
        "categoria": "Crimen / Drama",
        "anio": 1994,
        "poster": "/imgs/Pulp Fiction.png",
        "match": 89,
        "clasificacion": "18+",
        "duracion": "2 h 34 min",
        "sinopsis": "Las vidas de dos asesinos a sueldo de la mafia, un boxeador, la esposa de un gángster y una pareja de bandidos de poca monta se entrelazan en cuatro historias de violencia y redención.",
        "elenco": "John Travolta, Uma Thurman, Samuel L. Jackson.",
        "director": "Quentin Tarantino"
    },
    {
        "id": 6,
        "titulo": "The Karate Kid",
        "categoria": "Drama / Acción",
        "anio": 1984,
        "poster": "/imgs/Karate Kid.png",
        "match": 95,
        "clasificacion": "A",
        "duracion": "2 h 6 min",
        "sinopsis": "Un adolescente recién llegado a California es blanco de acoso escolar. Para aprender a defenderse, pide ayuda al conserje de su edificio, el señor Miyagi, un sabio maestro de artes marciales que le enseñará mucho más que solo pelear.",
        "elenco": "Ralph Macchio, Pat Morita, Elisabeth Shue.",
        "director": "John G. Avildsen"
    },
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
    
];

#Devuelve las peliculas
@app.get("/api/peliculas")
def getPeliculas():
    return DB_PELICULAS;

# --- Devuelve  pelicula por id
@app.get("/api/pelicula/{id}")
def get_pelicula_by_id(id: int = None):
    for peli in DB_PELICULAS:
        if peli["id"] == id:
            return peli
    return {"error": "Pelicula no encontrada"}

# --- Misma idea pero por QueryParam, 
@app.get("/api/pelicula_q")
def get_pelicula_by_id_q(id: int = None):
    if id is None:
        return {"error": "No existe el parámetro id"}
    for peli in DB_PELICULAS:
        if peli["id"] == id:
            return peli
    return {"error": "Id no localizado"}


# --- Para levantar el servicio ---
# uvicorn main:app --reload
# localhost:8000/api/peliculas
# localhost:8000/docs
