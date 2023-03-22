package com.homepainter.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.joda.time.DateTime;

import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    Date time;
    String telephone;
    int orderId;
    int addressId;

    int goodsId;

    String count;

    String status;

    Address address;

    Goods goods;


}
