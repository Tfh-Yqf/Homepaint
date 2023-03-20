package com.homepainter.util;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestRedis {

    @Autowired
    RedisUtil redisUtil;
    @Test
    public void testRedis(){
        redisUtil.set("qxg", "123456");
        System.out.println(redisUtil.get("qxg"));
    }
}
