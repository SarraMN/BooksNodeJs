import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(book: Partial<Book>): Promise<Book> {
    const newBook = this.booksRepository.create(book);
    return this.booksRepository.save(newBook);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async findOne(book: Partial<Book>): Promise<Book> {
    const foundBook = await this.booksRepository.findOne({ where: book });
    if (!foundBook) {
      throw new NotFoundException(`Book not found`);
    }
    return foundBook;
  }

  async update(id: number, book: Partial<Book>): Promise<Book> {
    const existingBook = await this.booksRepository.findOne({ where: { id } });
    if (!existingBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
  
    await this.booksRepository.update(id, book);
    const updatedBook = await this.booksRepository.findOne({ where: { id } });
    if (!updatedBook) {
      throw new NotFoundException(`Book with ID ${id} not found after update`);
    }
  
    return updatedBook;
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.booksRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
  }
}
