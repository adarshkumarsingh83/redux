package com.espark.adarsh.springserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ApplicationMain {

	public static void main(String[] args) {
		SpringApplication.run(ApplicationMain.class, args);
	}


	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/employees").allowedOrigins("*");
				registry.addMapping("/employee/*").allowedOrigins("http://localhost:3000");
			}
		};
	}

}
