package com.homepainter.controller;

import com.alibaba.fastjson.JSONObject;
import com.homepainter.service.GoodsService;
import com.homepainter.service.TranslateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/goods")
public class GoodsController {

    @Autowired
    GoodsService goodsService;

    @Autowired
    TranslateService translateService;

    @GetMapping("/get_list")
    public Map<String, Object> getAllList(){
        Map<String, Object> map = new HashMap<>();
        map.put("data", goodsService.getAllGoods());
        map.put("code", 0);
        map.put("msg", "查询订单成功！");
        return map;
    }

    @GetMapping("/get")
    public Map<String, Object> getGoodsById(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        if (data.get("goods_id") == null) map.put("data", goodsService.getAllGoods());
        else map.put("data", goodsService.getGoodsById((int) data.get("goods_id")));
        map.put("code", 0);
        map.put("msg", "查询订单成功！");
        return map;
    }
    @PostMapping("get_list")
    public Map<String, Object> getGoodsByContent(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        if (data.get("search_content") == null) map.put("data", goodsService.getAllGoods());
        else map.put("data", goodsService.getGoodsByContent((String) data.get("search_content")));
        map.put("code", 0);
        map.put("msg", "查询订单成功！");
        return map;
    }

    @PostMapping("/translate")
    public List<JSONObject> translate(@RequestBody List<JSONObject> jsonObjects) throws Exception {
        return translateService.translateJson(jsonObjects);
    }


}
