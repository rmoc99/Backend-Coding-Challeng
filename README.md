<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# Description

Backend Coding Challenge: NestJS Movie API
In this challenge, you are to create a Movie REST API using NestJS, a typescript framework for building efficient and scalable Node.js applications. You will be implementing CRUD operations for movies and related genres.

### EndPoints 

- ListMovies: List all movies in the database
- AddMovie: Add a movie to the database with the atributes 
  - Title(String,required)
  - Description(String,required)
  - Releasedate(Date,required)
  - Genre(ArrayofString,required)
- UpdateMovie: Update the details of a movie, the endpoints accepts any number of attributes, such as you can change only the description or multiple atributes at the same time
- DeleteMovie: Delete movie from the database by id
- ListGenres: list all genres 
- AddGenre: Add a new genre with the atribute
  - Name(String,required)
- DeleteGenre: Delete a genre from the database and alter the movies that have the deleted genre
- SearchMovies: search movies by title or genre. 

### Details 
- Movie database has and id, assuming that you can have two movies with the same name
- The database used is from Amazon Web Services (AWS), in the .env file you can see the database details such as the endpoint. Although its not secure to store this information publicaly, it was used to simplify the access


# Installation

```bash
$ git clone https://github.com/rmoc99/Backend-Coding-Challenge.git

$ npm install
```

Open Postman and import file Movie.postman_collection.json located on the root directory.

Since this is local Api you need to install Postman Desktop Agent

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
To test the application use the Postman Endpoints.

