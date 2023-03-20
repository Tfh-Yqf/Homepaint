package com.homepainter;

import com.homepainter.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HomePainterApplication {
    public static void main(String[] args) {
        SpringApplication.run(HomePainterApplication.class, args);
    }

}
