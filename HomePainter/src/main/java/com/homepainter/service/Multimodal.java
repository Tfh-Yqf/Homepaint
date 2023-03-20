package com.homepainter.service;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.homepainter.pojo.DTO.Imageinfos_withurl;
import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;


import com.tencentcloudapi.tiia.v20190529.TiiaClient;
import com.tencentcloudapi.tiia.v20190529.models.*;


import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.homepainter.service.tencent_credential.get_creadential;
import static com.homepainter.util.ReadJson.get_json;
import static com.homepainter.util.get_Directory.getAllFile;
import static com.homepainter.util.object2map.Obj2Map;


public class Multimodal
{


    public static Map<String,Object> search_image(String image,boolean use_url) {
        try{
            TiiaClient client = get_creadential();
            // 实例化一个请求对象,每个接口都会对应一个request对象
            SearchImageRequest req = new SearchImageRequest();
            req.setGroupId("furniture");
            if(use_url)
                req.setImageUrl(image);
            else
                req.setImageBase64(image);
            req.setMatchThreshold(10L);
            // 返回的resp是一个SearchImageResponse的实例，与请求对象对应
            SearchImageResponse resp = client.SearchImage(req);
            // 输出json格式的字符串回包
            System.out.println(SearchImageResponse.toJsonString(resp));
            // 执行成功 -- 数据处理 ：加图片url，解析JSON
            ImageInfo[] imageInfos = resp.getImageInfos();
            List<Imageinfos_withurl> imageInfos_withurls = new ArrayList<>();

            for(int i=0;i<imageInfos.length;i++){
                Imageinfos_withurl imageinfosWithurl = new Imageinfos_withurl();
                imageinfosWithurl = JSONObject.parseObject(JSONObject.toJSONString(imageInfos[i]),Imageinfos_withurl.class);

                imageinfosWithurl.setCustomContent(imageInfos[i].getCustomContent());
                String Imageurl = "https://image-1304455659.cos.ap-nanjing.myqcloud.com/3D-FUTURE-model-part1/"+imageInfos[i].getEntityId()+"/image.jpg";
                imageinfosWithurl.setImage_url(Imageurl);

                JSONObject object = JSON.parseObject(imageInfos[i].getTags());
                Map<String,Object> tag_map = Obj2Map(object);
                imageinfosWithurl.setTags_map(tag_map.get("map"));

                imageInfos_withurls.add(imageinfosWithurl);
            }

            Map<String,Object> data = Obj2Map((Object) resp);
            data.remove("ImageInfos");

            data.put("imageInfos",imageInfos_withurls);
            return data;
        } catch (TencentCloudSDKException e) {
            System.out.println(e.toString());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return null;
    }
    public static void CreateImage(String Tags,String CustomContent,String GroupId,String EntityId,String PicName,String Imageurl) {

        try{
            TiiaClient client = get_creadential();
            // 实例化一个请求对象,每个接口都会对应一个request对象
            CreateImageRequest req = new CreateImageRequest();
            req.setTags(Tags);
            req.setCustomContent(CustomContent);
            req.setGroupId(GroupId);
            req.setEntityId(EntityId);
            req.setPicName(PicName);
            req.setImageUrl(Imageurl);
            // 返回的resp是一个CreateImageResponse的实例，与请求对象对应
            CreateImageResponse resp = client.CreateImage(req);
            // 输出json格式的字符串回包
            System.out.println("success:"+CreateImageResponse.toJsonString(resp));
        } catch (TencentCloudSDKException e) {
            System.out.println(e.toString());
        }
    }

    /*
        Tags: Style_theme_material_super-category
        CustomContent:category
        GroupId:'furniture'
        EntityId:model_id
        PicName:主键id
     */
    public static void main(String [] args) {
        Integer succ_cnt = 1000;
        List<String> list = getAllFile("E:\\3D-FUTURE-model-part1");
        // System.out.println(list);

        String json = get_json("model_info.json");
        JSONArray jsonArray = JSON.parseArray(json);
        System.out.println("size:"+jsonArray.size());
        Map<String,Integer> super_category = new HashMap<>();
        Map<String,Integer> category = new HashMap<>();

        for(int i=0;i<jsonArray.size()&&succ_cnt<=3000;i++){

            JSONObject jsonObj = jsonArray.getJSONObject(i);

            String EntityId =  "";
            if(jsonObj.get("model_id")!=null)
                EntityId += jsonObj.get("model_id");
            else
                EntityId += "NULL"+i;

            boolean isfind = false;
            for(Integer j=0;j<list.size();j++){
                if(list.get(j).equals(EntityId)){
                    isfind = true;
                    break;
                }
            }
            if(!isfind) continue;
            else succ_cnt++;
            // System.out.println();
            String super_category_name = jsonObj.get("super-category").toString();
            super_category_name = super_category_name.replace('/','_');
            if(super_category.get(super_category_name)==null){
                super_category.put(super_category_name,1);
            }else{
                super_category.put(super_category_name,super_category.get(super_category_name)+1);
            }

            String category_name = jsonObj.get("category").toString();
            if(category.get(category_name)==null){
                category.put(category_name,1);
            }else{
                category.put(category_name,category.get(category_name)+1);
            }
            // System.out.println(category_name);



            String CustomContent = "";
            if(jsonObj.get("category")!=null)
                CustomContent += jsonObj.get("category");
            else
                CustomContent += "NULL";



            String PicName = String.valueOf(i)+succ_cnt;

            String Imageurl = "https://image-1304455659.cos.ap-nanjing.myqcloud.com/3D-FUTURE-model-part1/"+EntityId+"/image.jpg";


            jsonObj.remove("model_id");
            jsonObj.remove("category");
            if(succ_cnt>=2000){
                System.out.println(i+" "+succ_cnt+" "+Imageurl);
//                System.out.println(Tags);
//                System.out.println(CustomContent);
//                System.out.println(super_category_name);
//                System.out.println(EntityId);
//                System.out.println(PicName);
                CreateImage(jsonObj.toJSONString(),CustomContent,"furniture",EntityId,PicName,Imageurl);
            }

        }
        System.out.println("final result!!");
        System.out.println(super_category);
        System.out.println(category);

    }




}