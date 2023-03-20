package com.homepainter.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Goods_appraise {
    int appraiseId;
    int goodsId;
    String appraise;

    String avatar;

    String username;

    List<Appraise_image> imageUrl;

}
