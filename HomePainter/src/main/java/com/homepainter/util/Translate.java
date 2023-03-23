package com.homepainter.util;

import com.alibaba.fastjson.JSONObject;
import com.aliyun.tea.TeaException;

public class Translate {

    public static String translateEnToZh(String source) throws Exception {
        String target = "";
        com.aliyun.alimt20181012.Client client = Sample.createClient(
                "LTAI5t9wdyd4TksKyC4VJLeN", "Vd2PSALzrTx67ggRwU3iYGjkmRn7ut");
        com.aliyun.alimt20181012.models.TranslateGeneralRequest translateGeneralRequest = new com.aliyun.alimt20181012.models.TranslateGeneralRequest()
                .setFormatType("text")
                .setSourceLanguage("en")
                .setTargetLanguage("zh")
                .setSourceText(source)
                .setScene("general");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            // 复制代码运行请自行打印 API 的返回值
            com.aliyun.alimt20181012.models.TranslateGeneralResponse response =  client.translateGeneralWithOptions(translateGeneralRequest, runtime);
            JSONObject body = (JSONObject) JSONObject.parseObject(com.aliyun.teautil.Common.toJSONString(response)).get("body");
            JSONObject data = (JSONObject) body.get("data");
            target = (String) data.get("translated");
        } catch (TeaException error) {
            error.printStackTrace();
        } catch (Exception _error) {
            _error.printStackTrace();
        }
        return target;
    }
}
