import { Injectable } from '@nestjs/common';
import { Database } from '../../database/database.service';
import { Movie, UpdateMovie } from './movie.model';

@Injectable()
export class MovieService {
  constructor(private readonly dbService: Database) {}

  async listAllMovies(): Promise<Movie[]> {
    const query = `SELECT * FROM movie`;
    const result = await this.dbService.query(query);
    return result.rows as Movie[];
  }

  async findMovie(id: number): Promise<Movie> {
    const query = `SELECT * FROM movie WHERE id = $1`;
    const result = await this.dbService.query(query, [id]);
    return result.rows[0] as Movie;
  }
  

  async createMovie(movie: Movie): Promise<Movie> {
    const query = `INSERT INTO movie (title, description, releaseDate, genre) VALUES ($1, $2, $3, $4)`;
    const result = await this.dbService.query(query, [movie.title, movie.description, movie.releasedate, movie.genre]);
    return result.rows[0] as Movie;
  }

  async update(id: number, updateMovie: UpdateMovie): Promise<Movie> {
    /*
      -> transform updateMovie into an array with all the keys
        ['title', 'description', 'releasedate', 'genre']
      -> convert each member of the array into a SQL format 
        ['title = $1', 'description = $2', 'releasedate = $3', 'genre = $4']
      -> use join to change into a String with all the values separated with a comma
    */
     const fieldsString = Object.keys(updateMovie)
      .map((key, index) => {
        return `${key} = $${index + 1}`;
      })
      .join(', ')
      const queryParams = Object.values(updateMovie)
      queryParams.push(id);
      const query = `UPDATE movie SET ${fieldsString} WHERE id = $${queryParams.length}`;
      await this.dbService.query(query, queryParams);
      const result = await this.findMovie(id);
      return result as Movie;
  }

  async delete(id: number): Promise<Movie> {
    const query = `DELETE FROM movie Where id = $1`;
    const result = await this.dbService.query(query,[id]);
    return result;
  }

  async searchMovie(searchWord: string): Promise<Movie[]> {
    /* LIKE '%' || $1 || '%' 
    finds every movie that contains the 'searchWord' even if its not a perfect match
    for example if searchWord= sky. It will find movies like skyfall, sky, Fire in the sky */
    
    const query = `SELECT * FROM movie WHERE title LIKE '%' || $1 || '%' OR $1 = ANY(genre)`;
    const result = await this.dbService.query(query, [searchWord]);
    return result.rows as Movie[];
  }
}
