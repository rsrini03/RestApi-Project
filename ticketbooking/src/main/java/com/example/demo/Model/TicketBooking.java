package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TicketBooking {
	@Id
	private int MOVIE_ID;
	private String MOVIE_NAME;
	private String LANGUAGE;
	private int SEAT_AVAIL;
	private int PRICE;
	public int getMOVIE_ID() {
		return MOVIE_ID;
	}
	public void setMOVIE_ID(int mOVIE_ID) {
		MOVIE_ID = mOVIE_ID;
	}
	public String getMOVIE_NAME() {
		return MOVIE_NAME;
	}
	public void setMOVIE_NAME(String mOVIE_NAME) {
		MOVIE_NAME = mOVIE_NAME;
	}
	public String getLANGUAGE() {
		return LANGUAGE;
	}
	public void setLANGUAGE(String lANGUAGE) {
		LANGUAGE = lANGUAGE;
	}
	public int getSEAT_AVAIL() {
		return SEAT_AVAIL;
	}
	public void setSEAT_AVAIL(int sEAT_AVAIL) {
		SEAT_AVAIL = sEAT_AVAIL;
	}
	public int getPRICE() {
		return PRICE;
	}
	public void setPRICE(int pRICE) {
		PRICE = pRICE;
	}
	@Override
	public String toString() {
		return "TicketBooking [MOVIE_ID=" + MOVIE_ID + ", MOVIE_NAME=" + MOVIE_NAME + ", LANGUAGE=" + LANGUAGE
				+ ", SEAT_AVAIL=" + SEAT_AVAIL + ", PRICE=" + PRICE + "]";
	}
	

}