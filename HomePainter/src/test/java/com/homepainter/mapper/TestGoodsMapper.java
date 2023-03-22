package com.homepainter.mapper;


import com.homepainter.pojo.Appraise_image;
import com.homepainter.pojo.Goods_appraise;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestGoodsMapper {
    @Autowired
    Goods_imageMapper goodsImageMapper;

    @Autowired
    Goods_appraiseMapper goodsAppraise;

    @Autowired
    GoodsMapper goodsMapper;

    @Autowired
    Appraise_imageMapper appraiseImageMapper;

    @Test
    public void testGoods(){
//        goodsImageMapper.getAllImage().forEach(System.out::println);
//      goodsAppraise.getAllAppraise().forEach(System.out::println);
//        goodsMapper.getAllGoods().forEach(System.out::println);
//        goodsMapper.getGoodsByContent("w").forEach(System.out::println);
//        appraiseImageMapper.getAllImage().forEach(System.out::println);
        System.out.println(goodsMapper.getGoodsById(1));
    }
}
