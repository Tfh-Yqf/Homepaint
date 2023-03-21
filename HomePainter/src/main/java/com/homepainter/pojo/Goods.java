package com.homepainter.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Goods {
    int goodsId;
    String title;
    int storage;
    String detail;

    double price;

    List<Goods_image> imageUrl;

    List<Goods_appraise> appraise;
}
