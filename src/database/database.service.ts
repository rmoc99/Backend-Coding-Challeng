import { Pool } from 'pg';
import * as env from 'dotenv';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Database {
  private pool: Pool;

  constructor() {
    env.config();
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
    });
  }

  async query(text: string, params?: any[]): Promise<any> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(text, params);
      return result;
    } catch (error) {
    }
  }
}