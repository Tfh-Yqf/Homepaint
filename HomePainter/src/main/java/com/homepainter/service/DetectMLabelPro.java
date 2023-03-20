package com.homepainter.service;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;
import com.tencentcloudapi.tiia.v20190529.TiiaClient;
import com.tencentcloudapi.tiia.v20190529.models.*;

import static com.homepainter.service.tencent_credential.get_creadential;

public class DetectMLabelPro {


    public static DetectLabelProResponse DetectMLabelServie(String image,boolean use_url) {
        try{
            TiiaClient client = get_creadential();
            // 实例化一个请求对象,每个接口都会对应一个request对象
            DetectLabelProRequest req = new DetectLabelProRequest();
            if(use_url)
                req.setImageUrl(image);
            else
                req.setImageBase64(image);
            // 返回的resp是一个DetectLabelProResponse的实例，与请求对象对应
            DetectLabelProResponse resp = client.DetectLabelPro(req);
            // 输出json格式的字符串回包
            System.out.println(DetectLabelProResponse.toJsonString(resp));
            return resp;
        } catch (TencentCloudSDKException e) {
            System.out.println(e.toString());
            return null;
        }

    }
}
