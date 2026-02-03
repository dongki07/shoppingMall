package com.example.shoppingMall.entity;

import jakarta.persistence.*;

@Table(name = "test")
@Entity
public class FirstEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    public String name;
}
