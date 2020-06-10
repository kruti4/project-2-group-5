package com.g5.p2.services;

import java.util.List;

import com.g5.p2.models.Users;

public interface UsersService {

	List<Users> getAll();
	
	Users getById(Integer userId);
	
	Users create(Users u);
	
	Users update(Users u);
	
	Users createOrUpdate(Users u);
	
	boolean delete(Integer userId);
	
}