import { IsNotEmpty, IsString, IsDate, IsISBN } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  author: string;

  @Column()
  @IsNotEmpty()
  @IsDate()
  publishedDate: Date;

  @Column()
  @IsNotEmpty()
  @IsISBN()
  isbn: string;

  @Column()
  @IsString()
  summary: string;
}
