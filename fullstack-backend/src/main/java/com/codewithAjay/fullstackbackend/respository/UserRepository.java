package com.codewithAjay.fullstackbackend.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithAjay.fullstackbackend.Model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
