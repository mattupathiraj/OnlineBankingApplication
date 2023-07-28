package com.iamneo.security.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Bank;
import com.iamneo.security.repository.BankRepo;
@Service
public class ApiService {
	@Autowired //extends another class
	BankRepo stRepo; //reference variable
	
	public Bank saveDetails(Bank e) {
		return stRepo.save(e);
	}
	public List <Bank>getDetails()

{
		return stRepo.findAll();
		
}
	public Bank UpdateDetails(Bank e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	
	public void deleteDetails (int id)
	{		
	
	    stRepo.deleteById(id);	
	
	}
}