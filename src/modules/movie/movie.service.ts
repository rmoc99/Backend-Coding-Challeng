import { Injectable } from '@nestjs/common';
import { Database } from '../../database/database.service';
import { Movie, UpdateMovie } from './movie.model';

@Injectable()
export class MovieService {
  constructor(private readonly dbService: Database) {}

  async listAllMovies(): Promise<Movie[]> {
    try {
      const query = `SELECT * FROM movie`;
      const result = await this.dbService.query(query);
      return result.rows as Movie[];
    } catch (error) {
      console.error('Error listing all movies:', error);
      throw new Error('Failed to list movies');
    }
  }

  async findMovie(id: number): Promise<Movie> {
    try {
      const query = `SELECT * FROM movie WHERE id = $1`;
      const result = await this.dbService.query(query, [id]);
      return result.rows[0] as Movie;
    } catch (error) {
      console.error('Error finding movie:', error);
      throw new Error('Failed to find movie');
    }
    
  }
  

  async createMovie(movie: Movie): Promise<Movie> {
    try {
    const query = `INSERT INTO movie (title, description, releaseDate, genre) VALUES ($1, $2, $3, $4) RETURNING *`;
    const result = await this.dbService.query(query, [movie.title, movie.description, movie.releasedate, movie.genre]);
    return result.rows[0] as Movie;
    } catch (error) {
      console.error('Error creating movie:', error);
      throw error;
    }
  }

  async update(id: number, updateMovie: UpdateMovie): Promise<Movie> {
    /*
      -> transform updateMovie into an array with all the keys
        ['title', 'description', 'releasedate', 'genre']
      -> convert each member of the array into a SQL format 
        ['title = $1', 'description = $2', 'releasedate = $3', 'genre = $4']
      -> use join to change into a String with all the values separated with a comma
    */
    try {
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
    } catch (error) {
      console.error('Error updating movie:', error);
        throw new Error('Failed to update movie');
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const query = `DELETE FROM movie Where id = $1`;
      const result = await this.dbService.query(query,[id]);
      return;
    } catch (error) {
      console.error('Error deleting movie:', error);
        throw new Error('Failed to delete movie');
    }
  }

  async searchMovie(searchWord: string): Promise<Movie[]> {
    /* LIKE '%' || $1 || '%' 
    finds every movie that contains the 'searchWord' even if its not a perfect match
    for example if searchWord= sky. It will find movies like skyfall, sky, Fire in the sky */
    try {
      const query = `SELECT * FROM movie WHERE title LIKE '%' || $1 || '%' OR $1 = ANY(genre)`;
      const result = await this.dbService.query(query, [searchWord]);
      return result.rows as Movie[];
    } catch (error) {
      console.error('Error searching for movies:', error);
      throw new Error('Failed to search for movies');
    }
  }
}

  
