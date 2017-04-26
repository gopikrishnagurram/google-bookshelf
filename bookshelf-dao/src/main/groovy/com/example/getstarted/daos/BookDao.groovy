package com.example.getstarted.daos

import com.example.getstarted.objects.Book
import com.example.getstarted.objects.BookLocalization
import com.example.getstarted.objects.Result
import groovy.transform.CompileStatic

@CompileStatic
interface BookDao {
    Long createBook(Book book)

    Book readBook(Long bookId)

    void updateBook(Book book)

    void deleteBook(Long bookId)

    Result<Book> listBooks(String startCursor)

    Result<Book> listBooksByUser(String userId, String startCursor)

    BookLocalization getLocalization(Long bookId, String languageCode)
}