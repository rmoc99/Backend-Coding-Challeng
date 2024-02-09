import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { Database } from 'src/database/database.service';



@Module({
    providers: [GenreService, Database],
    controllers: [GenreController]
})
export class GenreModule{}