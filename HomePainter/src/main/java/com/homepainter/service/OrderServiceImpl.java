package com.homepainter.service;

import com.homepainter.mapper.AddressMapper;
import com.homepainter.pojo.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    AddressMapper addressMapper;

    @Override
    public int insertAddress(Address address) {
        return addressMapper.insertAddress(address);
    }

    @Override
    public List<Address> getAllAddress() {
        return addressMapper.getAllAddress();
    }

    @Override
    public int updateAddress(Address address) {
        return addressMapper.updateAddress(address);
    }

    @Override
    public int deleteAddress(int addressId) {
        return addressMapper.deleteAddress(addressId);
    }
}
