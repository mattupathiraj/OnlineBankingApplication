package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.iamneo.security.entity.Bank;
public interface BankRepo extends JpaRepository<Bank,Integer>{
}
