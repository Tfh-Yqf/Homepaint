package com.homepainter.pojo.DTO;

import com.tencentcloudapi.tiia.v20190529.models.ImageInfo;
import lombok.Data;
import reactor.util.annotation.Nullable;

import java.util.Map;

@Data
public class Imageinfos_withurl extends ImageInfo {

    @Nullable
    private String image_url;
    @Nullable
    private Object tags_map;
}
