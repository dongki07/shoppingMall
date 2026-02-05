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

    @PostMapping("/create")
    public void testCreate(@RequestBody FirstDto form) {
        FirstEntity target = form.toEntity();
        firstRepository.save(target);
        log.info("잘 터짐 ㅇㅇ: "+target);
    }
}
