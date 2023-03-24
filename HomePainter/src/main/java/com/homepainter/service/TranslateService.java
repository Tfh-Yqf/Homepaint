package com.homepainter.service;

import com.alibaba.fastjson.JSONObject;
import com.aliyun.tea.TeaException;
import com.homepainter.util.Sample;
import com.homepainter.util.Translate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TranslateService {

    public static long translationCount = 0;
    public List <JSONObject> translateJson(List <JSONObject> jsonObjects) throws Exception {
        for (JSONObject jsonObject : jsonObjects){
            jsonObject.put("super-category", Translate.translateEnToZh((String) jsonObject.get("super-category")));
            jsonObject.put("category", Translate.translateEnToZh((String) jsonObject.get("category")));
            jsonObject.put("style", Translate.translateEnToZh((String) jsonObject.get("style")));
            jsonObject.put("material", Translate.translateEnToZh((String) jsonObject.get("material")));
            jsonObject.put("theme", Translate.translateEnToZh((String) jsonObject.get("theme")));
            translationCount++;
            System.out.println("图片翻译进行数目：" + translationCount);
            System.out.println("次");
        }
;
        return jsonObjects;
    }
}
