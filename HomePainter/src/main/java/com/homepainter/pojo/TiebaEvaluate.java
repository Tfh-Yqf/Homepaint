package com.homepainter.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TiebaEvaluate {
    int tiebaId;
    String detail;
    int evaluateId;
    String avatar;
    String username;

    List<EvaluateImage> evaluateImage;

    String telephone;

    public TiebaEvaluate(int tiebaId, String detail, String avatar, String username, String telephone) {
        this.tiebaId = tiebaId;
        this.detail = detail;
        this.avatar = avatar;
        this.username = username;
        this.telephone = telephone;
    }

    public TiebaEvaluate(int tiebaId, String detail, String avatar, String username, String telephone, List<EvaluateImage> evaluateImage) {
        this.tiebaId = tiebaId;
        this.detail = detail;
        this.avatar = avatar;
        this.username = username;
        this.telephone = telephone;
        this.evaluateImage = evaluateImage;
    }
}
