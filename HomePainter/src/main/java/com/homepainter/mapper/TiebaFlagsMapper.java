package com.homepainter.mapper;

import com.homepainter.pojo.TiebaFlags;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface TiebaFlagsMapper {

    @Select("select * from tiebaFlags")
    public List<TiebaFlags> getTiebaFlags();
}
