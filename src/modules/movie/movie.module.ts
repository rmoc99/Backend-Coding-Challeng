import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { Database } from 'src/database/database.service';



@Module({
    providers: [MovieService, Database],
    controllers: [MovieController]
})
export class MovieModule{}