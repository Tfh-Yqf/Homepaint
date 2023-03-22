package com.homepainter.filter;

import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.io.IOException;
import java.net.SocketException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(RuntimeException.class)
    @ResponseBody
    public Map<String, Object> RunTimeErrorHandler(RuntimeException e){
      e.printStackTrace();
      Map<String, Object> map = new HashMap<>();
      map.put("code", 4);
      map.put("msg", "程序运行时错误！");
      return map;
  }

    @ExceptionHandler(SQLException.class)
    @ResponseBody
    public Map<String, Object> SQLErrorHandler(SQLException e){
        e.printStackTrace();
        Map<String, Object> map = new HashMap<>();
        map.put("code", 2);
        map.put("msg", "数据库错误！");
        return map;
    }

    @ExceptionHandler(IOException.class)
    @ResponseBody
    public Map<String, Object> SQLErrorHandler(IOException e){
        e.printStackTrace();
        Map<String, Object> map = new HashMap<>();
        map.put("code", 6);
        map.put("msg", "输入输出错误！");
        return map;
    }



    @ExceptionHandler(Exception.class)
    @ResponseBody
    public Map<String, Object> AllHandler(Exception e){
        e.printStackTrace();
        Map<String, Object> map = new HashMap<>();
        map.put("code", 50);
        map.put("msg", "其他错误！");
        return map;
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    @ResponseBody
    public Map<String, Object> Handler(HttpMediaTypeNotSupportedException e){
        e.printStackTrace();
        Map<String, Object> map = new HashMap<>();
        map.put("code", 7);
        map.put("msg", "媒体错误，我用的是requestbody，不要传form——data，会报错，我只能收json");
        return map;
    }

}
