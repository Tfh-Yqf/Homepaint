package com.homepainter.service;

import com.homepainter.pojo.Address;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestOrderService {

    @Autowired
    OrderService orderService;
    @Test
    public void testInsertAddress(){
        Address address = new Address("山东省", "威海市", "环翠区", "文化西路120号", "19819605657", "齐辛格");
        orderService.insertAddress(address);
    }

    @Test
    public void testUpdateAddress(){
        Address address = new Address(7, "湖北省", "威海市", "环翠区", "文化西路120号", "19819605657", "齐辛格");
        orderService.updateAddress(address);
    }
}
