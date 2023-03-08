import axios from 'axios';
import "../ticket/ticket.css";
import React,{useState,useEffect} from 'react'
function Movies() {

    const [movie_ID, setMOVIE_ID] = useState("");
    const [movie_NAME, setMOVIE_NAME] = useState("");
    const [language, setLANGUAGE] = useState("");
    const [seat_AVAIL, setSEAT_AVAIL] = useState("");
    const [price, setPRICE] = useState("");
        const save = (e) => {
            e.preventDefault();
            const obj = {movie_ID,movie_NAME,language,seat_AVAIL,price};
            fetch("http://localhost:8080/movie",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(obj)
            }).then(res => console.log("Added"))
            alert("Posted!!");
        }
    return ( 
        <>
    <div class="panel">
		<div class="state"><br/><i class="tick booking"></i><h1>movie registration</h1></div>
		<div class="form">
			<input placeholder='MOVIE_ID' type="text" value={movie_ID} onChange={(event) =>
                    {
                      setMOVIE_ID(event.target.value);      
                    }}/>
			<input placeholder='MOVIE_NAME' type="text" value={movie_NAME} onChange={(event) =>
                    {
                      setMOVIE_NAME(event.target.value);      
                    }}/>
			<input placeholder='LANGUAGE' type="text"value={language} onChange={(event) =>
                    {
                      setLANGUAGE(event.target.value);      
                    }}/>
			<input placeholder='SEAT_AVAIL' type="text"value={seat_AVAIL} onChange={(event) =>
                    {
                      setSEAT_AVAIL(event.target.value);      
                    }}/>
			<input placeholder='PRICE' type="text"value={price} onChange={(event) =>
                    {
                      setPRICE(event.target.value);      
                    }}/>
			<div class="submit" onClick={save}>submit</div>
		</div>
		<div class="question"><a href="#"><i class="tick further"></i>further question</a></div>
	</div>
    </> 
     );
}

export default Movies;