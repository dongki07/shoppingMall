package com.example.shoppingMall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ShoppingMallApplication {
	@Bean
	public WebMvcConfigurer webMvcConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/main/**")
						.allowedOrigins("http://localhost:3000")
						.allowedMethods("GET", "POST")
						.allowedHeaders("*")
						.allowCredentials(true);
			}
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(ShoppingMallApplication.class, args);
	}
}
