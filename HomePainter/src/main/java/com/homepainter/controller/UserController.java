package com.homepainter.controller;

import com.homepainter.pojo.User;
import com.homepainter.service.UserService;
import com.homepainter.util.RedisUtil;
import com.homepainter.util.TokenUtil;
import com.mysql.cj.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private HttpSession session;

    @Autowired
    private RedisUtil redisUtil;


    @GetMapping("/error")
    public Map<String, Object> error(){
        Map<String, Object> map = new HashMap<>();
        map.put("code", "3");
        return map;
    }

    @PostMapping("/test")
    public Map<String, Object> hello (@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("code", 1);
        return map;
    }
    @PostMapping("/login")
    public Map<String, Object> loginByPass(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("code", 0);
        String telephone = (String) data.get("telephone");
        String password = (String) data.get("password");
        if (StringUtils.isEmptyOrWhitespaceOnly(telephone) || StringUtils.isEmptyOrWhitespaceOnly(password)){
            map.put("msg", "手机号或密码为空！");
            return map;
        }
        if (userService.getPassByTelephone(telephone).equals(password)){
            String token = TokenUtil.generateToken(new User(telephone, password));
            map.put("code", 1);
            map.put("token", token);
            map.put("msg", "登陆成功！");
            redisUtil.set(token, "token" + telephone);
            redisUtil.expire(token, 54000);
        }
        else map.put("msg", "手机号或密码错误");
        return map;
    }

    @PostMapping("/smsLogin")
    public Map<String, Object> loginBySMS(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("code", 0);
        String telephone = (String) data.get("telephone");
        String verifyCode = (String) data.get("verifyCode");
        if (!redisUtil.get("tel" + telephone).equals(verifyCode)) map.put("msg", "验证码错误！");
        else{
            map.put("code", 1);
            map.put("msg", "登陆成功！");
            String token = TokenUtil.generateToken(new User(telephone));
            map.put("token", token);
            redisUtil.set(token, "token" + telephone);
            redisUtil.expire(token, 54000);
        }
        return map;
    }

    @PostMapping("/loginSendCode")
    public Map<String, Object> sendCode(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("code", 0);
        if (userService.ifExistsTel((String) data.get("telephone"))) map.put("msg", "该手机号未注册！");
        userService.sendCode((String) data.get("telephone"));
        map.put("code", 1);
        map.put("msg", "发送成功");

        return map;
    }

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("code", 0);
        String telephone = (String) data.get("telephone");
        String verifyCode = (String) data.get("verifyCode");
        String username = (String) data.get("username");
        String password = (String) data.get("password");
        User user = new User(username, password, telephone);
        System.out.println(telephone);
        if (redisUtil.get("tel" + telephone).equals(verifyCode)) {
            if (userService.insertUser(user) == true) {
                map.put("code", 1);
                map.put("msg", "注册成功！");
            } else map.put("msg", "网络错误！");
        }
        else map.put("msg", "验证码错误！");
        return map;
    }

    @PostMapping("/registerSendCode")
    public Map<String, Object> registerSendCode(@RequestBody Map<String, Object> data){
        Map<String, Object> map = new HashMap<>();
        map.put("code", 0);
        if (!userService.ifExistsTel((String) data.get("telephone"))) map.put("msg", "该手机已注册！");
        else {
            userService.sendCode((String) data.get("telephone"));
            map.put("code", 1);
            map.put("msg", "发送成功");
        }
        return map;
    }

}
