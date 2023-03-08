import "../ticket/ticket.css"
import React, {useState} from 'react'
function Ticket() {
    const [movie,setMovie] = useState({});
    const [id,setId] = useState();
    const [seat,setSeats] = useState();
    const handleClick = ()  => {
        fetch("http://localhost:8080/movie/"+id).then(res => res.json()).then(res => setMovie(res));
        console.log(movie);
        if(movie == null){
            alert("Wrong Id");
        }else if(seat > movie.seat_AVAIL){
            document.getElementById('mssg').innerHTML = NaN;   
        }
        else{
            document.getElementById('mssg').innerHTML = movie.price * seat;
        }
        if(document.getElementById('mssg').innerHTML== NaN){
            alert("seat exceed");
        }
    }
    
    const handleUpdate = () => {
        movie.seat_AVAIL=movie.seat_AVAIL-seat;
       fetch("http://localhost:8080/movie",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(movie)}).then(res => console.log("Added"))
    }
    return ( <>
   
    <div class="panel">
		<div class="state"><br/><i class="tick booking"></i><h1>Ticket Booking</h1></div>
		<div class="form">
			<input placeholder='enter movie id' type="text" value={id} onChange={(e) => {setId(e.target.value)}}/>
			<input placeholder='No. seats' type="text" value={seat} onChange={(e) => {setSeats(e.target.value)}}/>
			<div class="submit" onClick={handleClick}>submit</div>
            <p id="mssg">NaN</p>
			<div class="submit" onClick={handleUpdate}>confirm</div>
		</div>
		<div class="question"><a href="#"><i class="tick further"></i>further question</a></div>
	</div>
    </> );
}

export default Ticket;