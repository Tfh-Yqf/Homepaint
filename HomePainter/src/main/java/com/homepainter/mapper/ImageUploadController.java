package com.homepainter.mapper;

import com.homepainter.util.MultipartFile2File;
import com.qcloud.cos.model.PutObjectResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static com.homepainter.service.Upload_File.putObject;
import static com.homepainter.util.MultipartFile2File.MultipartFileToFile;

@RestController
public class ImageUploadController {

    @PostMapping("/upload")
    public Map<String,Object> upload(@RequestParam(value = "upload") MultipartFile uploadFile, HttpServletRequest req)throws IOException {
        Map<String,Object> res = new HashMap<>();
        File file =  MultipartFileToFile(uploadFile);
        PutObjectResult putObjectResult = putObject(uploadFile.getOriginalFilename(),file);


        if(putObjectResult.getETag()==null){
            res.put("code",1);
            res.put("msg","上传错误");
        }else{
            res.put("RequestId",putObjectResult.getRequestId());
            res.put("code",0);
            res.put("msg","上传成功");
        }

        return res;
    }
}
