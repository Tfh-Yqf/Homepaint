package com.homepainter.filter;

import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.springframework.http.client.support.HttpRequestWrapper;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

public class MyRequestWrapper extends HttpServletRequestWrapper{
    private byte[] body;
    public MyRequestWrapper(HttpServletRequest request) throws IOException {
        super(request);
        if(ServletFileUpload.isMultipartContent(request)){
            return;
        }
        StringBuilder sb = new StringBuilder();
        String line;
        BufferedReader reader = request.getReader();
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        String body = sb.toString();
        this.body = body.getBytes(StandardCharsets.UTF_8);
    }
    public String getBody() {
        return new String(this.body , StandardCharsets.UTF_8) ;
    }


    @Override
    public ServletInputStream getInputStream() {
        final ByteArrayInputStream bais = new ByteArrayInputStream(body);
        return new ServletInputStream() {
            @Override
            public boolean isFinished() {
                return false;
            }
            @Override
            public boolean isReady() {
                return false;
            }
            @Override
            public void setReadListener(ReadListener readListener) {
            }
            @Override
            public int read(){
                return bais.read();
            }
        };
    }
    @Override
    public BufferedReader getReader(){
        return new BufferedReader(new InputStreamReader(this.getInputStream()));
    }
}
