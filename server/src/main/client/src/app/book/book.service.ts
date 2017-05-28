import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor() { }

  getGeneralBooks(): Promise<Book[]> {
    return Promise.resolve([
      new Book(
        1, 
        'Practical Grails 3', 
        'Eric Helgeson', 
        'createdByUser', 
        'createdByUserId', 
        'publishedDate', 
        'The first book dedicated to Grails 3. You will learn the concepts behind building Grails applications. Real, up-to-date code examples are provided so you can easily follow along.', 
        '/assets/images/practical-grails-3-book-cover.png'
      ),
      new Book(
        2, 
        'Grails 3 - Step by Step', 
        'Cristian Olaru', 
        'createdByUser', 
        'createdByUserId', 
        'publishedDate', 
        'We try to describe here how a complete greenfield application can be implemented with Grails 3 in a fast way using profiles and plugins - and we do this in the sample application that accompanies this book.', 
        '/assets/images/grails-step-by-step.png'
      ),
      new Book(
        3, 
        'Grails: A Quick-Start Guide', 
        'Dave Klein', 
        'createdByUser', 
        'createdByUserId', 
        'publishedDate', 
        'We try to describe here how a complete greenfield application can be implemented with Grails 3 in a fast way using profiles and plugins - and we do this in the sample application that accompanies this book.', 
        '/assets/images/grails-quick-start.jpg'
      )
    ]);
  }

  getBooksForUser(userId: string): Promise<Book[]> {
    return Promise.resolve([
      new Book(
        3, 
        `Title for ${userId}`,
        `Author for ${userId}`,
        `createdBy for ${userId}`,
        `createdById for ${userId}`,
        `publishedDate for ${userId}`,
        `description for ${userId}`,
        `imageUrl for ${userId}`
      )
    ]);
  }

}