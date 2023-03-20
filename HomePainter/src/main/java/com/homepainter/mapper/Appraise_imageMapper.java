package com.homepainter.mapper;

import com.homepainter.pojo.Appraise_image;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface Appraise_imageMapper {

    @Select("select * from appraise_image")
    List<Appraise_image> getAllImage();
}
