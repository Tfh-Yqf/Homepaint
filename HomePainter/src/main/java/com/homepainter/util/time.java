package com.homepainter.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class time {
    public static String getnowtime(){
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy年MM月dd日HH时mm分ss秒");
        Date date = new Date(System.currentTimeMillis());
        return formatter.format(date);
    }
}
