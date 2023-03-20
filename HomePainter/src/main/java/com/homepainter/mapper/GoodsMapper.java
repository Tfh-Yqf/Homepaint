package com.homepainter.mapper;

import com.homepainter.pojo.Goods;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface GoodsMapper {
    @Select("select * from goods")
    @Results({
            @Result(
                    property = "appraise",
                    column = "goodsId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.Goods_appraiseMapper.getAllAppraise")
            ),
            @Result(
                    property = "imageUrl",
                    column = "appraiseId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.Goods_imageMapper.getAllImage")
            )
    })
    List<Goods> getAllGoods();

    @Select("select * from goods where title like concat('%', #{searchContent}, '%') or subtitle like concat('%', #{searchContent}, '%') or detail like concat('%', #{searchContent}, '%')")
    @Results({
            @Result(
                    property = "appraise",
                    column = "goodsId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.Goods_appraiseMapper.getAllAppraise")
            ),
            @Result(
                    property = "imageUrl",
                    column = "appraiseId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.Goods_imageMapper.getAllImage")
            )
    })
    List<Goods> getGoodsByContent(String searchContent);
    @Select("select * from goods where goodsId = #{goodsId}")
    @Results({
            @Result(
                    property = "appraise",
                    column = "goodsId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.Goods_appraiseMapper.getAllAppraise")
            ),
            @Result(
                    property = "imageUrl",
                    column = "appraiseId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.Goods_imageMapper.getAllImage")
            )
    })
    List<Goods> getGoodsById(int goodsId);
}
