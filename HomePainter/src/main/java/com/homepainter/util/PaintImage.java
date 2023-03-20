package com.homepainter.util;



import com.tencentcloudapi.tiia.v20190529.models.Product;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;

import javax.imageio.ImageIO;



/**
 * 图片水印
 * @blog http://sjsky.iteye.com
 * @author Michael
 */
public class PaintImage {
    public static void drawline(BufferedImage img,String filename,Graphics2D graphics2D, int xmin, int xmax, int ymin, int ymax, String content) throws IOException {
        Font font = new Font("楷体", Font.BOLD, 35);
        // xmin xmax ymin ymax
        graphics2D.drawLine(xmin, ymax, xmax, ymax);
        graphics2D.drawLine(xmin, ymax, xmin, ymin);
        graphics2D.drawLine(xmin, ymin, xmax, ymin);
        graphics2D.drawLine(xmax, ymax, xmax, ymin);
        graphics2D.setFont(font);

        graphics2D.drawLine((xmin + xmax) / 2, (ymax+ymin)/2, (xmin + xmax) / 2 + 50, (ymax+ymin)/2 - 50);
        graphics2D.drawLine((xmin + xmax) / 2 + 50, (ymax+ymin)/2 - 50,(xmin + xmax) / 2 + 100, (ymax+ymin)/2 - 50);
        graphics2D.drawString(content,(xmin + xmax) / 2 + 100,(ymax + ymin) / 2 - 50) ;
    }

    public static File draw_lines(File file, String filename, Product[] products) throws IOException {
        File file_res = null;

        String fullname = "./search_result/" + filename;
        BufferedImage img = ImageIO.read(file);
        Graphics2D graphics2D = img.createGraphics();
        graphics2D.setColor(Color.RED);
        graphics2D.setStroke(new BasicStroke(2f));


        for (int i = 0; i < products.length; ++i){
            //这个地方需要改一下路径
            drawline(img,filename,graphics2D, products[i].getXMin().intValue(), products[i].getXMax().intValue(), products[i].getYMin().intValue(), products[i].getYMax().intValue(), products[i].getName());
        }

        //返回路径需要改一下
        if(ImageIO.write(img, "JPEG", new FileOutputStream(fullname)))
            file_res =  new File(fullname);
        return file_res;
    }













    //        int flag = 0;
//        if (ymin - 100 >= 0 && flag == 0){
//            graphics2D.drawLine(((xmin + xmax) / 2), ymin, (xmin + xmax) / 2 + 50, ymin - 50); //向上
//            flag = 1;
//            graphics2D.drawString(content, (xmin + xmax) / 2 + 50, ymin - 50);
//        }
//        if (xmax + 100 <= img.getWidth() && flag == 0) {
//            graphics2D.drawLine(xmax, (ymax + ymin) / 2, xmax + 50, (ymax + ymin) / 2 + 50);//向右
//            flag = 1;
//            graphics2D.drawString(content, xmax + 50, (ymax + ymin) / 2 + 50);
//        }
//        if (xmax - 100 >= 0 && flag == 0) {
//            graphics2D.drawLine(xmin, (ymax + ymin) / 2, xmax - 50, (ymax + ymin) / 2 + 50);//向左
//            flag = 1;
//            graphics2D.drawString(content, xmax - 50, (ymax + ymin) / 2 + 50);
//        }
//        if (ymax + 100 <= img.getHeight() && flag == 0) {
//            graphics2D.drawLine(((xmin + xmax) / 2), ymax, (xmin + xmax) / 2 + 50, ymax + 50); //向下
//            flag = 1;
//            graphics2D.drawString(content,(xmin + xmax) / 2 + 50, ymax + 50 );
//        }
//        if (flag == 0){
//            graphics2D.drawString(content,(xmin + xmax) / 2,(ymax + ymin) / 2) ;
//        }
}
