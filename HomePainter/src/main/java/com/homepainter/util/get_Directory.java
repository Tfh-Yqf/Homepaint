package com.homepainter.util;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class get_Directory {

    /**
     * 获取所有文件夹
     * @param filepath 路径
     */
    public static List<String> getAllFile(String filepath){
        List<String> allFiles = new ArrayList<>();
        findFolder(new File (filepath), allFiles);
        return allFiles;
    }

    /**
     * 递归
     * @param file
     * @param allFiles
     */
    private static void findFolder(File file,List<String> allFiles){
        if(file.isDirectory()){
            allFiles.add(file.getName());
            File[] files = file.listFiles();
            for(File f : files){
                findFolder(f,allFiles);
            }
        }else{
            // allFiles.add(file);
        }
    }
}
