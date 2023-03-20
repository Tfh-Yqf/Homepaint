package com.homepainter.service;
import java.io.File;

import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.model.PutObjectRequest;
import com.qcloud.cos.model.PutObjectResult;
import com.qcloud.cos.region.Region;

import static com.homepainter.service.tencent_credential.get_credential;
import static com.qcloud.cos.demo.BucketRefererDemo.cosClient;

public class Upload_File {



    /*
        上次文件接口，输入文件名，文件路径，文件
     */
    public static PutObjectResult putObject(String filename,File file) {
        COSClient cosClient = get_credential();

        String bucketName = "image-1304455659";
        String key = "test/"+filename;

        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, key, file);
        PutObjectResult putObjectResult = cosClient.putObject(putObjectRequest);
        System.out.println(putObjectResult.getRequestId());
        return putObjectResult;
    }

    public static PutObjectResult putObject(String filename,File file,String filepath) {
        COSClient cosClient = get_credential();

        String bucketName = "image-1304455659";
        String key = filepath+filename;

        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, key, file);
        PutObjectResult putObjectResult = cosClient.putObject(putObjectRequest);
        System.out.println(putObjectResult.getRequestId());
        return putObjectResult;
    }

    public static PutObjectResult putObject(File file) {
        COSClient cosClient = get_credential();

        String bucketName = "image-1304455659";
        String key = "test/"+file.getName();

        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, key, file);
        PutObjectResult putObjectResult = cosClient.putObject(putObjectRequest);
        System.out.println(putObjectResult.getRequestId());
        return putObjectResult;
    }
}
