import { Injectable } from '@nestjs/common';
import { Database } from '../../database/database.service';

@Injectable()
export class GenreService {
  constructor(private readonly dbService: Database) {}

    async createGenre(name: String): Promise<String> {
      try {
        const query = `INSERT INTO genre VALUES ($1)`;
        await this.dbService.query(query, [name]);
        return name;
      } catch (error) {
        console.error('Error creating genre:', error);
        throw new Error('Failed to create genre');
      }
    }
    

    async listAllGenres(): Promise<String[]> {
      try {
        const query = `SELECT * FROM genre`;
        const result = await this.dbService.query(query);
        return result.rows as String[];
      } catch (error) {
        console.error('Error listing all genres:', error);
        throw new Error('Failed to list all genres');
      }
    }

      async deleteGenre(name: String): Promise<String> {
        try {
          const query = `DELETE FROM genre Where name = $1`;
          const result = await this.dbService.query(query,[name]);
          if (result.rowCount === 0) throw new Error('No genre with that name'); 
          return `${name} was deleted successfully`;
          
        } catch (error) {
          console.error('Error deleting genre:', error);
          throw new Error('Failed to delete genre');
        }
      }
}
