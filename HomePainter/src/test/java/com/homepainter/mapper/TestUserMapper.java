package com.homepainter.mapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestUserMapper {

    @Autowired
    UserMapper userMapper;

    @Test
    public void testTestUserMapper(){
        userMapper.getUserList().forEach(System.out::println);
    }


}
