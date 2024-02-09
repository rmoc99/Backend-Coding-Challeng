import { Module } from '@nestjs/common';
import { Database } from './database/database.service';
import { MovieModule } from './modules/movie/movie.module';
import {GenreModule} from './modules/genre/genre.module';

@Module({
  imports: [MovieModule, GenreModule],
  providers: [Database],
})
export class AppModule {}
