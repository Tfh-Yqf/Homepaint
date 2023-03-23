package com.homepainter.service;

import com.homepainter.mapper.EvaluateImageMapper;
import com.homepainter.mapper.TiebaEvaluateMapper;
import com.homepainter.mapper.TiebaMapper;
import com.homepainter.pojo.EvaluateImage;
import com.homepainter.pojo.Tieba;
import com.homepainter.pojo.TiebaEvaluate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CommunityService implements CommunityServiceImpl {

    @Autowired
    TiebaMapper tiebaMapper;

    @Autowired
    TiebaEvaluateMapper tiebaEvaluateMapper;

    @Autowired
    EvaluateImageMapper evaluateImageMapper;



    @Override
    public List<Tieba> getTiebaList() {
        return tiebaMapper.getTiebaList();
    }

    @Override
    public List<TiebaEvaluate> getTiebaEvaluate(int tiebaId){
        return tiebaEvaluateMapper.getTiebaEvaluate(tiebaId);
    }

    @Override
    public List<Tieba> getTiebaById(int tiebaId) {
        return tiebaMapper.getTiebaById(tiebaId);
    }

    @Override
    public int givePrice(int tiebaId) {
        return tiebaMapper.givePrice(tiebaId);
    }

    @Override
    public boolean makeEvaluate(TiebaEvaluate tiebaEvaluate) {
        if (tiebaEvaluateMapper.insertEvaluate(tiebaEvaluate) == 0) return false;
        for (EvaluateImage evaluateImage : tiebaEvaluate.getEvaluateImage()) {
            if (evaluateImageMapper.insertEvaluateImage(evaluateImage) == 0) return false;
        }
        return true;
    }

}
