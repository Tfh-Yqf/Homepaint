package com.homepainter.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import static com.homepainter.service.Multimodal.search_image;

@RestController
public class Image_Meta {

    /*
        图片匹配API
        图片搜索相关接口，两种方式，传image_url或者base64
     */
    @PostMapping("/image_meta")
    public Map<String,Object> DetectProductBeta(@RequestBody Map<String,Object> body) throws Exception {
        Map<String,Object> res = new HashMap<>();
        Map<String,Object> data = new HashMap<>();

        if(body.get("image_url")!=null)
            data = search_image(body.get("image_url").toString(),true);
        else
            data = search_image(body.get("image").toString(),false);


        if(data == null){
            res.put("code", 1);
            res.put("msg", "图片匹配API调用错误");
        }else{
            res.put("code", 0);
            res.put("msg", "图片匹配-调用成功！");
            res.put("data", data);
        }
        return res;
    }
}
