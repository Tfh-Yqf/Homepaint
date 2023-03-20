package com.homepainter.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class User {
    private String username;
    private String password;
    private String telephone;

    public User(String telephone, String password){
        this.telephone = telephone;
        this.password = password;
    }

    public User(String telephone){
        this.telephone = telephone;
    }
}
