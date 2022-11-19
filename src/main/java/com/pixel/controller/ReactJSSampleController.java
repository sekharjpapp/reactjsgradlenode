package com.pixel.controller;

import com.pixel.BookDB;
import com.pixel.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ReactJSSampleController {

    @Autowired
    private BookDB bookDB;

    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/books")
    public List<Book> getBooks() {
        return Arrays.asList(new Book(1, "Core Java"), new Book(2, "Effective Java"), new Book(3, "Head First Java"));
    }
    @GetMapping("/getHealth")
    public List<Book> healthCheck() {
        List<Book> allBooks = bookDB.getAllBooks();
        System.out.println(allBooks);
        return allBooks;
    }
}
