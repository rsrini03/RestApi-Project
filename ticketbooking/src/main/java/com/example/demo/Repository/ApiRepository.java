package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.TicketBooking;



public interface ApiRepository extends JpaRepository<TicketBooking, Integer>{

}