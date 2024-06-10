import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      synchronize: true, // This will create database schema, don't use in production
      type: 'mysql', // Use 'mssql' for MSSQL
      host: 'localhost',
      port: 3308, // MSSQL default port is 1433
      database: 'book_management',
      username: 'root',
      password: 'admin',
      autoLoadEntities: true,
    }),
    BooksModule,
  ],
})
export class AppModule {}
