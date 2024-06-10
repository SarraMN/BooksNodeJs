import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse, ApiParam } from '@nestjs/swagger';

@Controller('books')
@ApiTags('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({ status: 201, description: 'The book has been successfully created.' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  create(@Body() book: Book): Promise<Book> {
    return this.booksService.create(book);
  }

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  findAll(): Promise<Book[]>  {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiParam({ name: 'id', description: 'Book ID' })
  findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne({ id: +id });
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiParam({ name: 'id', description: 'Book ID' })
  update(@Param('id') id: string, @Body() updatedBook: Book): Promise<Book> {
    return this.booksService.update(+id, updatedBook);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiParam({ name: 'id', description: 'Book ID' })
  @ApiResponse({ status: 200, description: 'The book has been successfully deleted.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.booksService.remove(id);
  }
}



