package com.homepainter.controller;

import com.homepainter.service.DetectProductBeta;
import com.tencentcloudapi.tiia.v20190529.models.DetectProductBetaResponse;
import com.tencentcloudapi.tiia.v20190529.models.DetectProductResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import static com.homepainter.service.DetectProductBeta.Send_DetectProduct;
import static com.homepainter.service.DetectProductBeta.Send_DetectProductBeta;


@RestController
public class DetectProductController {
    /*
       调用商品识别接口，输入图片url,返回商品识别信息
    */
    @PostMapping("/DetectProduct")
    public Map<String,Object> DetectProduct(@RequestBody Map<String,Object> body){
        Map<String,Object> res = new HashMap<>();
        DetectProductResponse obj = null;
        if(body.get("image_url")!=null)
            obj =  Send_DetectProduct(body.get("image_url").toString(),true);
        else
            obj = Send_DetectProduct(body.get("image").toString(),false);
        // 将返回数据导入数据库

        // 给图片画框和加文字

        if(obj == null){
            res.put("code", 1);
            res.put("msg", "API调用错误");
        }else{
            res.put("code", 0);
            res.put("msg", "调用成功！");
            res.put("data", obj);
        }
        return res;
    }

    @PostMapping("/DetectProductBeta")
    public Map<String,Object> DetectProductBeta(@RequestBody Map<String,Object> body){
        Map<String,Object> res = new HashMap<>();
        DetectProductBetaResponse obj = null;
        if(body.get("image_url")!=null)
            obj =  Send_DetectProductBeta(body.get("image_url").toString(),true);
        else
            obj = Send_DetectProductBeta(body.get("image").toString(),false);
        // 将返回数据导入数据库

        // 给图片画框和加文字

        if(obj == null){
            res.put("code", 1);
            res.put("msg", "API调用错误");
        }else{
            res.put("code", 0);
            res.put("msg", "调用成功！");
            res.put("data", obj);
        }
        return res;
    }


}
