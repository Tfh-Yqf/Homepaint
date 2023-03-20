package com.homepainter.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

public class File2Base64 {
    /**
     *
     * @return String
     * @description 将文件转base64字符串
     * @date 2018年3月20日
     * @author changyl
     * File转成编码成BASE64
     */
    public static String fileToBase64(MultipartFile file ) {
        String base64 = null;
        InputStream in = null;
        try {
            in = file.getInputStream();
            byte[] bytes=new byte[(int)file.getSize()];
            in.read(bytes);
            base64 = Base64.getEncoder().encodeToString(bytes);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return base64;
    }
}
