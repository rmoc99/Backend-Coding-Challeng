import {IsString } from "class-validator";
    
export class Genre {
  @IsString()
  name: string;
}