package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Bankaccount;
public interface BankaccountRepo extends JpaRepository<Bankaccount,Integer>{
}