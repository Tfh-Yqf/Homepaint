package com.homepainter.mapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestOrderMapper {

    @Autowired
    OrderMapper orderMapper;

    @Test
    public void testOrder(){
        System.out.println(orderMapper.getOrderDetail(1));
//        orderMapper.getOrderList().forEach(System.out::println);
    }
}
