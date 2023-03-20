package com.homepainter.service;

import com.homepainter.pojo.Address;

import java.util.List;

public interface OrderService {
    int insertAddress(Address address);
    List<Address> getAllAddress();

    int updateAddress(Address address);

    int deleteAddress(int addressId);
}
