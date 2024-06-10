import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './book.entity'; // Make sure to import your Book entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]), // Import Book entity
  ],
  controllers: [BooksController],
  providers: [BooksService], // Remove BookRepository from providers
})
export class BooksModule {}
