package com.example.shoppingMall.controller;

import com.example.shoppingMall.dto.FirstDto;
import com.example.shoppingMall.entity.FirstEntity;
import com.example.shoppingMall.repository.FirstRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/main")
public class FirstController {
    private final FirstRepository firstRepository;

    @Autowired
    public FirstController(FirstRepository firstRepository) {
        this.firstRepository = firstRepository;
    }

    @GetMapping("/test")
    public void test() {
        System.out.println("Testing");
    }

    @GetMapping("/list")
    public List<FirstEntity> testList() {
        return firstRepository.findAll();
    }

    @GetMapping("/index/{id}")
    public FirstEntity testIndex(@PathVariable("id") long id) {
        return firstRepository.findById(id).orElse(null);
    }

    @PostMapping("/create")
    public void testCreate(@RequestBody FirstDto form) {
        FirstEntity target = form.toEntity();
        firstRepository.save(target);
    }

    @PostMapping("/update")
    public void testUpdate(@RequestBody FirstDto form) {
        FirstEntity target = form.toEntity();
        FirstEntity test = firstRepository.findById(target.getId()).orElse(null);
        if(test != null) firstRepository.save(target);
    }

    @DeleteMapping("/delete/{id}")
    public void testDelete(@PathVariable("id") long id) {
        FirstEntity target = firstRepository.findById(id).orElse(null);
        if(target != null) firstRepository.delete(target);
    }
}
