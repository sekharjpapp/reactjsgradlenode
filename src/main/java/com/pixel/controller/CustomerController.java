package com.pixel.controller;

import com.pixel.model.Customer;
import com.pixel.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/getCustomerRecords")
    public List<Customer> getCustomerRecords() {
        List<Customer> getAllCustomers = customerRepository.findAll();
        return getAllCustomers;
    }
    @PostMapping("/add")
    public void addCustomerRecord(@RequestBody Customer customer) {
        customerRepository.save(customer);
    }

}
