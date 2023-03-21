package com.homepainter.mapper;


import com.homepainter.pojo.EvaluateImage;
import com.homepainter.pojo.TiebaEvaluate;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class testTieba {

    @Autowired
    TiebaImageMapper tiebaImageMapper;

    @Autowired
    TiebaFlagsMapper tIebaFlagMapper;

    @Autowired
    TiebaMapper tiebaMapper;

    @Autowired
    TiebaEvaluateMapper tiebaEvaluateMapper;

    @Autowired
    EvaluateImageMapper evaluateImageMapper;

    @Test
    public void testGetTiebaList(){
//        tiebaImageMapper.getTiebaImage().forEach(System.out::println);
//        tIebaFlagMapper.getTiebaFlags().forEach(System.out::println);
        tiebaMapper.getTiebaList().forEach(System.out::println);
//        tiebaEvaluateMapper.getTiebaEvaluate(1).forEach(System.out::println);
    }

    @Test
    public void testGivePrice(){
        tiebaMapper.givePrice(1);
    }

    @Test
    public void testInsertE(){
        evaluateImageMapper.insertEvaluateImage(new EvaluateImage(2, "hahahaha.jpg"));
//        tiebaEvaluateMapper.insertEvaluate(new TiebaEvaluate(1, "bucuo", "3142.jpg", "qxg"));
    }

}
