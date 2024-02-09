import { Body, Controller, Get, Post, Put, Delete, Param, HttpException, HttpStatus } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie, UpdateMovie} from './movie.model'; 


@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAllMovies(): Promise<Movie[]> {
    try {
      return this.movieService.listAllMovies();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  } 
  
  @Post()
  async createMovie(@Body() movie:Movie ): Promise<Movie> {
    try {
      return this.movieService.createMovie(movie);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateMovie: UpdateMovie): Promise<Movie> {
    try {
      return this.movieService.update(id, updateMovie);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      return this.movieService.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get(':name')
  async searchMovie(@Param('name') searchString: string): Promise<Movie[]> {
    try {
      return this.movieService.searchMovie(searchString);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  } 
}