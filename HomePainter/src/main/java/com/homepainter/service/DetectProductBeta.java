package com.homepainter.service;

import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;
import com.tencentcloudapi.tiia.v20190529.TiiaClient;
import com.tencentcloudapi.tiia.v20190529.models.*;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import static com.homepainter.service.tencent_credential.get_creadential;


public class DetectProductBeta
{

    public static DetectProductBetaResponse Send_DetectProductBeta(String image,boolean use_imageurl) {

        try{
            // 实例化要请求产品的client对象,clientProfile是可选的
            TiiaClient client = get_creadential();
            // 实例化一个请求对象,每个接口都会对应一个request对象
            DetectProductBetaRequest req = new DetectProductBetaRequest();
            if(use_imageurl)
                req.setImageUrl(image);
            else
                req.setImageBase64(image);
            // 返回的resp是一个DetectProductBetaResponse的实例，与请求对象对应
            DetectProductBetaResponse resp = client.DetectProductBeta(req);
            // 输出json格式的字符串回包
            System.out.println(DetectProductBetaResponse.toJsonString(resp));
            return resp;
        } catch (TencentCloudSDKException e) {
            System.out.println(e.toString());
        }
        return null;
    }

    public static DetectProductResponse Send_DetectProduct(String image,boolean use_imageurl) {

        try{
            // 实例化要请求产品的client对象,clientProfile是可选的
            TiiaClient client = get_creadential();
            // 实例化一个请求对象,每个接口都会对应一个request对象
            DetectProductRequest req = new DetectProductRequest();
            if(use_imageurl)
                req.setImageUrl(image);
            else
                req.setImageBase64(image);
            // 返回的resp是一个DetectProductBetaResponse的实例，与请求对象对应
            DetectProductResponse resp = client.DetectProduct(req);
            // 输出json格式的字符串回包
            System.out.println(DetectProductResponse.toJsonString(resp));
            return resp;
        } catch (TencentCloudSDKException e) {
            System.out.println(e.toString());
        }
        return null;
    }



}