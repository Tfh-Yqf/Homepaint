package com.homepainter.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluateImage {
    int evaluateId;
    String imageUrl;

    int imageId;

    public EvaluateImage(int evaluateId, String imageUrl) {
        this.evaluateId = evaluateId;
        this.imageUrl = imageUrl;
    }
}
