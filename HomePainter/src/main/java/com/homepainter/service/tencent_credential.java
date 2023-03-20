package com.homepainter.service;

import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.region.Region;
import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.tiia.v20190529.TiiaClient;

public class tencent_credential {

    public static TiiaClient get_creadential(){
        String SecretId = "AKIDpTs1tUoqc6xXqsjJcePt61f28wTklUw6";
        String SecretKey = "vZw2rPfeS2MPBhwtZz8B3f04rNcbJlyv";
        Credential cred = new Credential(SecretId, SecretKey);

        // 实例化一个http选项，可选的，没有特殊需求可以跳过
        HttpProfile httpProfile = new HttpProfile();
        httpProfile.setEndpoint("tiia.tencentcloudapi.com");
        // 实例化一个client选项，可选的，没有特殊需求可以跳过
        ClientProfile clientProfile = new ClientProfile();
        clientProfile.setHttpProfile(httpProfile);
        // 实例化要请求产品的client对象,clientProfile是可选的
        TiiaClient client = new TiiaClient(cred, "ap-beijing", clientProfile);
        return client;
    }

    public static COSClient get_credential(){
        // 初始化用户身份信息(secretId, secretKey)
        COSCredentials cred = new BasicCOSCredentials("AKIDpTs1tUoqc6xXqsjJcePt61f28wTklUw6","vZw2rPfeS2MPBhwtZz8B3f04rNcbJlyv");
        // 设置bucket的区域, COS地域的简称请参照 https://www.qcloud.com/document/product/436/6224
        ClientConfig clientConfig = new ClientConfig(new Region("ap-nanjing"));
        // 生成cos客户端
        COSClient cosclient = new COSClient(cred, clientConfig);
        return  cosclient;
    }
}
