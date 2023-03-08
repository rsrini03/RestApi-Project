package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Model.TicketBooking;
import com.example.demo.Repository.ApiRepository;


@Service
public class ApiService {
	@Autowired
	ApiRepository repository;
	public String addMovie(TicketBooking movie) 
	{
		repository.save(movie);
		return "Book is Added";
	}
	public List<TicketBooking> getmovies()
	{
		return repository.findAll();
	}
	
	public Optional<TicketBooking> getMovieById(int id){
		return repository.findById(id);
	}
	public String updateMovie(TicketBooking movie)
	{
		repository.save(movie);
		return " movie is Updated ";
	}
	
	public String deletemovieById(int id) {
	    repository.deleteById(id);
	    return "Book Removed";
	}
	
	public List<TicketBooking> getMoviesSorted(String field)
	{
		return repository.findAll(Sort.by(Sort.Direction.ASC, field));
	}
	

}