package com.homepainter.util;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

public class object2map {
    public static Map<String,Object> Obj2Map(Object obj) throws Exception{
        Map<String,Object> map=new HashMap<String, Object>();
        Field[] fields = obj.getClass().getDeclaredFields();
        for(Field field:fields){
            field.setAccessible(true);
            map.put(field.getName(), field.get(obj));
        }
        return map;
    }
}
