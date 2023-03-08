package com.example.demo.Controller;


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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.TicketBooking;
import com.example.demo.Service.ApiService;
@RestController
@CrossOrigin
public class APiController {
	@Autowired
	ApiService service;
	
	@PostMapping("/movie")
	public String add(@RequestBody TicketBooking movie)
	{
		return service.addMovie(movie);
	}
	
	@GetMapping("/movie")
	public List<TicketBooking> get()
	{
		return service.getmovies();
	}
	@GetMapping("/movie/{id}")
	public Optional<TicketBooking> idWithSort(@PathVariable int id)
	{
		return service.getMovieById(id);
	}
	@PutMapping("/movie")
	public String update(@RequestBody TicketBooking book)
	{
		return service.updateMovie(book);
	}
	
	@DeleteMapping("/movie")
		public String delete(@RequestParam int id)
		{
		return service.deletemovieById(id);
		}
	
	
	

}