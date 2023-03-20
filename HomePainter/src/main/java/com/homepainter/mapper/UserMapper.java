package com.homepainter.mapper;

import com.homepainter.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {
    @Select("select * from user;")
    List<User> getUserList();

    @Select("select password from user where telephone = #{telephone}")
    String getPassByTelephone(String telephone);

    @Insert("insert into `user` values(#{username}, #{password}, #{telephone})")
    int insertUser(User user);
}
