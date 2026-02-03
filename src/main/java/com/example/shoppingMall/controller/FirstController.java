package com.example.shoppingMall.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/main")
public class FirstController {
    @GetMapping("/test")
    public void test() {
        System.out.println("Testing");
    }

    @GetMapping("/list")
    public int testList() {
        return 1;
    }
}
