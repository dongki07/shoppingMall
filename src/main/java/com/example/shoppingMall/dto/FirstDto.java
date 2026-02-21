package com.example.shoppingMall.dto;

import com.example.shoppingMall.entity.FirstEntity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
public class FirstDto {
    public Long id;
    public String name;
    public String content;

    public FirstEntity toEntity() {
        return new FirstEntity(id, name, content);
    }
}
