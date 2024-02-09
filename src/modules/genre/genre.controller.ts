import { Body, Controller, Get, Post, Delete, HttpStatus, HttpException, Param} from '@nestjs/common';
import { GenreService } from './genre.service';
import {Genre} from './genre.model'


@Controller('genre')
export class GenreController {
    constructor(private readonly genreService: GenreService) {}

    @Get()
    async findAllGenres(): Promise<String[]> {
        return this.genreService.listAllGenres();
    } 

    @Post()
    async createGenre(@Body() genre: Genre ): Promise<Genre> {
        try {
            return this.genreService.createGenre(genre);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete(':name')
    async deleteGenre(@Param('name') name: string ): Promise<String> {
        try {
            return await this.genreService.deleteGenre(name);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

