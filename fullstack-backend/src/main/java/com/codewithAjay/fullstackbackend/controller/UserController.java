package com.codewithAjay.fullstackbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import com.codewithAjay.fullstackbackend.Model.User;
import com.codewithAjay.fullstackbackend.exception.UserNotFoundException;
import com.codewithAjay.fullstackbackend.respository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	User newuser;
	@Autowired
	private UserRepository userRepository;
	 
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	@GetMapping("/users")
	List<User> getallUser(){
		return userRepository.findAll();
	}
	@GetMapping("/users/{id}")
	User getUser(@PathVariable Long id) {
		return userRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	@GetMapping("/userrr/{id}")
	User gettUser(@PathVariable Long id) {
		User userr=userRepository.findById(id).orElse(null);
		return userr;
	}
	
	@PutMapping("/update/{id}")
	User updateUser(@RequestBody User updateuser,@PathVariable Long id) {
		User existingUser=userRepository.findById(id).orElse(null);
		existingUser.setName(updateuser.getName());
		existingUser.setUsername(updateuser.getUsername());
		existingUser.setEmail(updateuser.getEmail());
		return userRepository.save(existingUser);
		
		
	}
	@DeleteMapping("/delete/{id}")
	String deleteuser(@PathVariable Long id) {
		userRepository.deleteById(id);
		return "Deleted";
	}
	
	
	
	public UserController() {
		// TODO Auto-generated constructor stub
	}

}
