package com.homepainter.util;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

@SpringBootTest
public class TestToken {
    @Autowired
    TokenUtil tokenUtil;

    @Test
    public void testRandomString(){
        for (int i = 0; i < 20; i++){
            System.out.println(UUID.randomUUID().toString());
        }
    }
}
