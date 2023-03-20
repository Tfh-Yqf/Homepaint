package com.homepainter.mapper;

import com.homepainter.pojo.Address;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AddressMapper {

    @Select("select * from address")
    List<Address> getAllAddress();
    @Insert("insert into address values (#{addressId}, #{province}, #{city}, #{county}, #{address}, #{phone}, #{nickname})")
    int insertAddress(Address address);

    @Update("update address set province = #{province}, city = #{city}, county = #{county}, address = #{address}, phone = #{phone}, nickname = #{nickname} where addressId = #{addressId}")
    int updateAddress(Address address);

    @Delete("delete from address where #{addressId} = addressId")
    int deleteAddress(int addressId);
}
