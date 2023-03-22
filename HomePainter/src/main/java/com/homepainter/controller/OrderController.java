package com.homepainter.controller;

import com.homepainter.pojo.Address;
import com.homepainter.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping
    public Map<String, Object> test(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        String a = (String) data.get("token");
        System.out.println("token");
        map.put("code", 2);
        return map;
    }

    @GetMapping("/address_list")
    public Map<String, Object> getAllAddress(){
        Map<String, Object> map = new HashMap<>();
        map.put("data", orderService.getAllAddress());
        map.put("code", 0);
        map.put("msg", "查询地址成功！");
        return map;
    }

    @PostMapping("/add_address")
    public Map<String, Object> insertAddress(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("code", 1);
        String province = (String) data.get("province");
        String city = (String) data.get("city");
        String county = (String) data.get("county");
        String address = (String) data.get("address");
        String phone = (String) data.get("phone");
        String nickname = (String) data.get("nickname");
        Address ad = new Address(province, city, county, address, phone, nickname);
        if (orderService.insertAddress(ad) == 1){
            map.put("code", 0);
            map.put("msg", "新建地址成功！");
        }
        return map;
    }

    @PostMapping("/update_address")
    public Map<String, Object> updateAddress(@RequestBody Map<String, Object> data) {
        Map<String, Object> map = new HashMap<>();
        map.put("code", 1);
        int addressId = (int) data.get("address_id");
        String province = (String) data.get("province");
        String city = (String) data.get("city");
        String county = (String) data.get("county");
        String address = (String) data.get("address");
        String phone = (String) data.get("phone");
        String nickname = (String) data.get("nickname");
        Address ad = new Address(addressId, province, city, county, address, phone, nickname);
        if (orderService.updateAddress(ad) == 1){
            map.put("code", 0);
            map.put("msg", "更新地址成功！");
        }
        return map;
    }

    @PostMapping("/delete")
    public Map<String, Object> deleteAddress(@RequestBody Map<String, Object> data){
        int addressId = (int) data.get("address_id");
        Map<String, Object> map = new HashMap<>();
        map.put("code", 1);
        if (orderService.deleteAddress(addressId) == 1){
            map.put("code", 0);
            map.put("msg", "删除地址成功！");
        }
        return map;
    }

    @PostMapping("/Post_list")
    public Map<String, Object> getOrderList(){
        Map<String, Object> map = new HashMap<>();
        map.put("data", orderService.getOrderList());
        map.put("code", 0);
        map.put("msg", "查询订单列表成功！");
        return map;
    }

    @PostMapping("/Post_detail")
    public Map<String, Object> getOrderDetail(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("data", orderService.getOrderDetail((int) data.get("order_id")));
        map.put("code", 0);
        map.put("msg", "查询订单列表成功！");
        return map;
    }
}
