/*
const express = require('express');
const app = express();
const port = 3100;

//app.use(core)
app.use(express.json());

//dummy data
let movies = [
    { id: 1, title: 'LOTR', director: 'Peter Jacson', year: 1999},
    { id: 2, title: 'Avengers', director: 'Anthony Ruso', year: 2010},
    { id: 3, title: 'spiderman', director: 'Danish Naisyila', year: 2006},
];

console.log(movies);

app.get('/', (request, response) => {
    response.send('Selamat Datang diserver Node.js, Terimakasih');
});

app.get('/api/movies', (request, response) => {
    response.json(movies);
});

app.get('/api/movies/:id', (request, response) => {
    const movie = movies.find(movie => movie.id === parseInt(request.params.id));
    if (movie) {
        response.json(movie);
    } else { 
        response.status(404).send('Movie not found');
    }
});

// post /movies - membuat film baru
app.post(`api/movies`, (request, response) => {
    const {title, director, year} = request.body || {};
    if (!title || !director || !year) {
        return response.status(400).json({error: `title, director, year wajib diisi`});
    }
    const newMovie = {id: movies.length + 1, title, director, year};
    movies.push(newMovie);
    response.status(201).json(newMovie);
});

// put /movies//:id - memperbarui data film
app.put(`api/movies/:id`, (request, response) => {
    const id = parseInt(request.params.id);
    const movieIndex = movies.findIndex(m => m.id === id);
    if (movieIndex === -1) {
        return response.status(404).json ({ error: `Movie tidak ditemukan`});
    }
    const {title, director, year} = request.body || {};
    const updateMovie = {id, title, director, year};
    movies[movieIndex] = updateMovie;
    response.json(updateMovie);
});

// delete /movies/:id - menghapus film
app.delete('/api/movies/:id', (request, response) => {
    const id = parseInt(request.params.id);

    const movieIndex = movies.findIndex(m => m.id === id);

    if (movieIndex === -1) {
        return response.status(404).json({ error: 'Movie tidak ditemukan' });
    }

    movies.splice(movieIndex, 1);
    response.status(204).send();
});

app.listen(port,() => {
    console.log(`Server is running on: ${port}`);
});
*/

const express = require('express');
const app = express();
const port = 3100;

app.use(express.json());

// Dummy data sutradara
let directors = [
    { id: 1, name: 'Danish Naisyila', birthYear: 1961 },
    { id: 2, name: 'Nadhifah Afiyah', birthYear: 1970 },
    { id: 3, name: 'Dian Restu', birthYear: 1985 },
    { id: 4, name: 'Adelia Fioren', birthYear: 1999 },
    { id: 5, name: 'Husnul Alisah', birthYear: 1996 },
];

// GET semua sutradara
app.get('/api/directors', (request, response) => {
    response.json(directors);
});

// GET satu sutradara berdasarkan ID
app.get('/api/directors/:id', (request, response) => {
    const director = directors.find(d => d.id === parseInt(request.params.id));
    if (!director) {
        return response.status(404).json({ error: 'Director tidak ditemukan' });
    }
    response.json(director);
});

// POST sutradara baru
app.post('/api/directors', (request, response) => {
    const { name, birthYear } = request.body;
    if (!name || !birthYear) {
        return response.status(400).json({ error: 'name dan birthYear wajib diisi' });
    }
    const newDirector = {
        id: directors.length + 1,
        name,
        birthYear
    };
    directors.push(newDirector);
    response.status(201).json(newDirector);
});

// PUT update data sutradara
app.put('/api/directors/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const index = directors.findIndex(d => d.id === id);
    if (index === -1) {
        return response.status(404).json({ error: 'Director tidak ditemukan' });
    }

    const { name, birthYear } = request.body;
    if (!name || !birthYear) {
        return response.status(400).json({ error: 'name dan birthYear wajib diisi' });
    }

    directors[index] = { id, name, birthYear };
    response.json(directors[index]);
});

// DELETE sutradara
app.delete('/api/directors/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const index = directors.findIndex(d => d.id === id);
    if (index === -1) {
        return response.status(404).json({ error: 'Director tidak ditemukan' });
    }

    directors.splice(index, 1);
    response.status(204).send();
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
});