package com.homepainter.controller;


import com.alibaba.fastjson.JSONObject;
import com.homepainter.pojo.EvaluateImage;
import com.homepainter.pojo.TiebaEvaluate;
import com.homepainter.service.CommunityService;
import com.homepainter.service.CommunityServiceImpl;
import com.homepainter.service.TranslateService;
import com.homepainter.util.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/community")
public class CommunityController {

    @Autowired
    CommunityService communityService;

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    TranslateService translateService;

    @PostMapping("/list")
    public Map<String, Object> getCommunityList(){
        Map<String, Object> map = new HashMap();
        map.put("code", 0);
        map.put("msg", "社区信息查询成功！");
        map.put("data", communityService.getTiebaList());
        return map;
    }

    @PostMapping("/detail")
    public Map<String, Object> getDetail(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap();
        map.put("code", 0);
        map.put("msg", "帖子详细信息查询成功！");
        map.put("data", communityService.getTiebaById((int) data.get("forum_id")));
        map.put("evaluates", communityService.getTiebaEvaluate((int) data.get("forum_id")));
        return map;
    }

    @PostMapping("/publish")
    public Map<String, Object> givePrice(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap();
        map.put("code", 1);
        if (communityService.givePrice((int) data.get("forum_id")) == 0) map.put("msg", "点赞失败，网络异常");
        else{
            map.put("code", 0);
            map.put("msg", "点赞成功！");
        }
        return map;
    }

    @PostMapping("/evaluate")
    public Map<String, Object> makeEvaluate(@RequestBody Map<String, Object> data, @RequestHeader String token){
        Map<String, Object> map = new HashMap();
        int forum_id = (int) data.get("forum_id");
        List<String> image = (ArrayList) data.get("image");
        List<EvaluateImage> l = new ArrayList<>();
        for (String s : image)
            l.add(new EvaluateImage(forum_id, s));
        String tel =(String) redisUtil.get(token);
        String telephone = tel.substring(5);
        if (communityService.makeEvaluate(new TiebaEvaluate(forum_id, (String) data.get("detail"), (String) data.get("avatar"), (String) data.get("username"), telephone, l))){
            map.put("code", 0);
            map.put("msg", "插入评论成功");
        }
        else {
            map.put("code", 1);
            map.put("msg", "插入评论失败");
        }
        return map;
    }

    @PostMapping("/translate")
    public List<JSONObject> translate(@RequestBody List<JSONObject> jsonObjects) throws Exception {
        return translateService.translateJson(jsonObjects);
    }
}
