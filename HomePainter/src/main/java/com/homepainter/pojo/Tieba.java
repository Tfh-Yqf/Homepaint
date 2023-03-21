package com.homepainter.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tieba {
    String username;
    String avatar;
    String content;
    int tiebaId;
    String telephone;
    int goodsId;
    String favorites;
    Date time;
    int collect;

    List<TiebaFlags> tiebaFlags;

    List<TiebaImage> tiebaImage;

    List<TiebaEvaluate> tiebaEvaluates;
}
