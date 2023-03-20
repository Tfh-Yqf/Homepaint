package com.homepainter.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.homepainter.service.DetectProductBeta;
import com.qcloud.cos.model.PutObjectResult;
import com.tencentcloudapi.tiia.v20190529.models.DetectProductBetaResponse;
import com.tencentcloudapi.tiia.v20190529.models.DetectProductResponse;
import com.tencentcloudapi.tiia.v20190529.models.Product;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static com.homepainter.service.DetectProductBeta.*;
import static com.homepainter.service.DrawImageService.Draw_Upload_Image;
import static com.homepainter.service.Upload_File.putObject;
import static com.homepainter.util.File2Base64.Base64ToFile;
import static com.homepainter.util.PaintImage.drawline;
import static com.homepainter.util.time.getnowtime;


@RestController
public class DetectProductController {
    /*
       调用商品识别接口，输入图片url,返回商品识别信息
    */
    @PostMapping("/DetectProduct")
    public Map<String,Object> DetectProduct(@RequestBody Map<String,Object> body) throws IOException {
        Map<String,Object> res = new HashMap<>();
        // 调用 商品识别API
        DetectProductResponse detectProductResponse = null;
        String image = "";
        boolean use_url;

        if(body.get("image_url")!=null){
            image = body.get("image_url").toString();
            use_url = true;
        }
        else{
            image = body.get("image").toString();
            use_url = false;
        }

        detectProductResponse =  Send_DetectProduct(image,use_url);
        if(detectProductResponse == null){
            res.put("code", 1);
            res.put("msg", "API调用错误");
            return res;
        }


        res = Draw_Upload_Image(image,detectProductResponse,use_url);

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
