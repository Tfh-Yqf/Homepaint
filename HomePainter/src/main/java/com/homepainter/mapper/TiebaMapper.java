package com.homepainter.mapper;


import com.homepainter.pojo.Tieba;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface TiebaMapper {

    @Select("select username, avatar, content, tiebaId, telephone, goodsId, favorites, time, collect from tieba")
    @Results({
            @Result(
                    property = "tiebaFlags",
                    column = "tiebaId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.TiebaFlagsMapper.getTiebaFlags")
            ),

            @Result(
                    property = "tiebaImage",
                    column = "tiebaId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.TiebaImageMapper.getTiebaImage")
            )
    })
    List<Tieba> getTiebaList();

    @Select("select username, avatar, content, tiebaId, telephone, goodsId, favorites, time, collect from tieba where tiebaId = #{tiebaId}")
    @Results({
            @Result(
                    property = "tiebaFlags",
                    column = "tiebaId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.TiebaFlagsMapper.getTiebaFlags")
            ),

            @Result(
                    property = "tiebaImage",
                    column = "tiebaId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.TiebaImageMapper.getTiebaImage")
            )
    })
    List<Tieba> getTiebaById(int tiebaId);

    @Update("update tieba set favorites = favorites + 1 where tiebaId = #{tiebaId}")
    int givePrice(int tiebaId);
}
