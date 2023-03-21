package com.homepainter.mapper;


import com.homepainter.pojo.EvaluateImage;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.*;

@Mapper
@Repository
public interface EvaluateImageMapper {

    @Select("select * from evaluateimage")
    List<EvaluateImage> getEvaluateImage();

    @Insert("insert into evaluateimage values (#{evaluateId}, #{imageUrl}, #{imageId})")
    int insertEvaluateImage(EvaluateImage evaluateImage);
}
