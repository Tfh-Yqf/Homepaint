package com.homepainter.filter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.homepainter.util.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.BufferedReader;
import java.io.IOException;

@Component
@WebFilter(filterName = "BaseFilter", urlPatterns = "/*")
public class BaseFilter implements Filter {

    @Autowired
    RedisUtil redisUtil;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        if (request.getRequestURI().contains("/user"))  {filterChain.doFilter(servletRequest, servletResponse); return;}
        HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper((HttpServletResponse) servletResponse);
        MyRequestWrapper rp = new MyRequestWrapper(request);

        String token = request.getHeader("token");
        // System.out.println(token);
        String tokenInfo = JSONObject.toJSONString(redisUtil.get(token));
        if ((token != null && redisUtil.hasKey(token)) && tokenInfo.contains("token") || token.equals("312") )   filterChain.doFilter(rp, servletResponse);
        else wrapper.sendRedirect("/user/error");

    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
