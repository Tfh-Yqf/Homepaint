package com.homepainter.mapper;


import com.homepainter.pojo.Goods_appraise;
import com.homepainter.pojo.Goods_image;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface Goods_imageMapper {
    @Select("select * from goods_image")
    List<Goods_image> getAllImage();
}
