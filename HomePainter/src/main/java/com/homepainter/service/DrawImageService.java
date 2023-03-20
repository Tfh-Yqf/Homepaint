package com.homepainter.service;

import com.qcloud.cos.model.PutObjectResult;
import com.tencentcloudapi.tiia.v20190529.models.DetectProductResponse;
import com.tencentcloudapi.tiia.v20190529.models.Product;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static com.homepainter.service.Upload_File.putObject;
import static com.homepainter.util.File2Base64.*;
import static com.homepainter.util.PaintImage.draw_lines;
import static com.homepainter.util.PaintImage.drawline;
import static com.homepainter.util.time.getnowtime;

public class DrawImageService {

    public static Map<String,Object> Draw_Upload_Image(String image, DetectProductResponse detectProductResponse,boolean use_url) throws IOException {
        if(use_url){
            image  = GET_Image2Base64(image);
        }
//        System.out.println(image);
        Map<String,Object> res = new HashMap<>();
        Product[] products = detectProductResponse.getProducts();
        String Imageurl = "";
        // 图片类型转换
        File file = null;
        if(image != null){
            file = Base64ToFile(image);
        }

        // 给图片画框和加文字,并保存图片
        String filename = getnowtime() +".jpg";
        File file_res = draw_lines(file, filename, products);


        // 图片上传
        if(file_res != null){
            PutObjectResult putObjectResult = putObject(filename,file_res,"search_result/");
            if(putObjectResult.getETag() == null){
                res.put("code", 1);
                res.put("msg", "图片上传错误");
                return res;
            }
        }else{
            res.put("code", 1);
            res.put("msg", "图片绘制失败");
            return res;
        }

        Imageurl = "https://image-1304455659.cos.ap-nanjing.myqcloud.com/search_result/"+filename;

        res.put("code", 0);
        res.put("msg", "调用成功！");
        res.put("data", detectProductResponse);
        res.put("image_url", Imageurl);

        return res;
    }
}
