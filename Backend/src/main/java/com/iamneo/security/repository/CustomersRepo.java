package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Customers;
public interface CustomersRepo extends JpaRepository<Customers,Integer>{

}