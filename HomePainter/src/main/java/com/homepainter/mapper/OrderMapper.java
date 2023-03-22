package com.homepainter.mapper;

import com.homepainter.pojo.Address;
import com.homepainter.pojo.Goods;
import com.homepainter.pojo.Order;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository

public interface OrderMapper {

    @Select("select * from `order`")
    List<Order> getOrderList();

    @Select("select * from `order`  where orderId = #{orderId}")
    @Results({
           @Result(
                 property = "goods",
                 column = "goodsId",
                 javaType = Goods.class,
                 many = @Many(select = "com.homepainter.mapper.GoodsMapper.getGoodsById")
         ),
            @Result(
                    property = "address",
                    column = "addressId",
                    javaType = Address.class,
                    many = @Many(select = "com.homepainter.mapper.AddressMapper.getAddressById")
            ),
            @Result(
                    property = "addressId",
                    column = "addressId"
            ),
            @Result(
                    property = "goodsId",
                    column = "goodsId"
            )

    })
    Order getOrderDetail(int orderId);
}
