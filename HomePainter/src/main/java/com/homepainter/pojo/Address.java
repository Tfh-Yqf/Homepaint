package com.homepainter.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    private int addressId;
    private String province;
    private String city;
    private String county;
    private String address;
    private String phone;
    private String nickname;

    public Address(String province, String city, String county, String address, String phone, String nickname) {
        this.province = province;
        this.city = city;
        this.county = county;
        this.address = address;
        this.phone = phone;
        this.nickname = nickname;
    }
}
