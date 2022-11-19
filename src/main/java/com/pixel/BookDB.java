package com.pixel;

import com.pixel.model.Book;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class BookDB {

    public List<Book> getAllBooks() {

        List<Book>  booksDB = Arrays.asList(new Book(101,"Scala"),
                new Book(102,"Java")
                );
        return booksDB;
    }
}
