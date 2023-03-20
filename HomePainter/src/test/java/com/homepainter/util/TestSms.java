package com.homepainter.util;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestSms {

    @Autowired
    SendSms sendSms;

    @Test
    public void testSms(){
        String verifyCode = String.valueOf((int)(Math.random()*900000 + 100000));
        sendSms.send("18522703473", verifyCode,"1540772");
    }
}
