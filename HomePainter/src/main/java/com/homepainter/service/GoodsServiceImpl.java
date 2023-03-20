package com.homepainter.service;

import com.homepainter.mapper.GoodsMapper;
import com.homepainter.pojo.Goods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsServiceImpl implements GoodsService{

    @Autowired
    GoodsMapper goodsMapper;
    @Override
    public List<Goods> getAllGoods() {
        return goodsMapper.getAllGoods();
    }

    @Override
    public List<Goods> getGoodsByContent(String searchContent) {
        return goodsMapper.getGoodsByContent(searchContent);
    }

    @Override
    public List<Goods> getGoodsById(int goodsId) {
        return goodsMapper.getGoodsById(goodsId);
    }
}
