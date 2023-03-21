package com.homepainter.service;

import com.homepainter.pojo.Tieba;
import com.homepainter.pojo.TiebaEvaluate;

import java.util.List;

public interface CommunityServiceImpl {
    public List<Tieba> getTiebaList();

    public List<TiebaEvaluate> getTiebaEvaluate(int tiebaId);

    public List<Tieba> getTiebaById(int tiebaId);

    public int givePrice(int tiebaId);

    public boolean makeEvaluate(TiebaEvaluate tiebaEvaluate);
}
