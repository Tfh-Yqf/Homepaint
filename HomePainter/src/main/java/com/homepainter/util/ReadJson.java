package com.homepainter.util;

import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class ReadJson {
    /*
        读入JSON数据，输入文件名，将文件妨碍resource目录下即可
        返回String,还需要用JSON parse一下
     */
    public static String get_json (String filename) {
        String txt = "";
        try {
            ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            //Resource[] resources = resolver.getResources("templaets/layout/email.html");
            String property = System.getProperty("user.dir")+ File.separator;
            System.out.println(property);

            String filepath = "";

            Resource resource = null;
            InputStream stream = null;
            filepath = ".\\"+filename;
            resource = resolver.getResource(filepath);
            stream = resource.getInputStream();


            StringBuilder buffer = new StringBuilder();
            byte[] bytes = new byte[1024];

            try {
                for (int n; (n = stream.read(bytes)) != -1; ) {
                    buffer.append(new String(bytes, 0, n));
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            txt = buffer.toString();

        } catch (IOException e) {
            e.printStackTrace();
        }
        return txt;
    }
}
