package com.homepainter.service;

import com.homepainter.pojo.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestUserService {

    @Autowired
    UserService userService;

    @Test
    public void testGetPassByUser(){
        System.out.println(userService.getPassByTelephone("19819605657"));
    }

    @Test
    public void testInsertUser(){
        User user = new User("13225101568", "hello", "13335101568");
        userService.insertUser(user);

    }
}
