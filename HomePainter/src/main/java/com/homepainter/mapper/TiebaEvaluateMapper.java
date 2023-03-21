package com.homepainter.mapper;

import com.homepainter.pojo.TiebaEvaluate;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.*;

@Mapper
@Repository
public interface TiebaEvaluateMapper {

    @Select("select * from tiebaevaluate where tiebaId = #{tiebaId}")
    @Results({
            @Result(property = "evaluateImage",
                    column = "evaluateId",
                    javaType = List.class,
                    many = @Many(select = "com.homepainter.mapper.EvaluateImageMapper.getEvaluateImage"))
    })
    List<TiebaEvaluate> getTiebaEvaluate(int tiebaId);

    @Insert("insert into tiebaevaluate values (#{tiebaId}, #{detail}, #{evaluateId}, #{avatar}, #{username}, #{telephone})")
    int insertEvaluate(TiebaEvaluate tiebaEvaluate);
}
