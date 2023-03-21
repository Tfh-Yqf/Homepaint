package com.homepainter.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestCommunityService {

    @Autowired
    CommunityService communityService;
    @Test
    public void testTieba(){
        communityService.tiebaMapper.getTiebaById(1).forEach(System.out::println);
    }
}
