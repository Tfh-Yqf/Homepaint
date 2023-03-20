package com.homepainter.controller;

import com.tencentcloudapi.tiia.v20190529.models.DetectLabelProResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import static com.homepainter.service.DetectMLabelPro.DetectMLabelServie;

@RestController
public class DetectModelController {

    @PostMapping("/DetectModel")
    public Map<String,Object> DetectModel(@RequestBody Map<String,Object> data){
        Map<String,Object> res  = new HashMap<>();
        DetectLabelProResponse detectLabelProResponse = null;
        if(data.get("image_url")!=null)
            detectLabelProResponse = DetectMLabelServie(data.get("image_url").toString(),true);
        else
            detectLabelProResponse = DetectMLabelServie(data.get("image").toString(),false);

        if(detectLabelProResponse==null){
            res.put("code",1);
            res.put("msg","程序错误");
        }else{
            res.put("code",0);
            res.put("msg","通用图像接口调用成功！");
            res.put("data",detectLabelProResponse);
        }

        return res;
    }
}
