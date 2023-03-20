package com.homepainter.service;

import com.homepainter.pojo.Goods;

import java.util.List;

public interface GoodsService {
    List<Goods> getAllGoods();

    List<Goods> getGoodsByContent(String searchContent);

    List<Goods> getGoodsById(int goodsId);
}
