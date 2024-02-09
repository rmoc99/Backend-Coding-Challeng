import { IsArray, IsDate, IsInt, IsString } from "class-validator";
    
export class Movie {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDate()
  releasedate: Date;

  @IsArray()
  @IsString({ each: true })
  genre: string[];
  }

export class UpdateMovie {
  title?: string;
  description?: string;
  releasedate?: Date;
  genre?: string[];
}
  