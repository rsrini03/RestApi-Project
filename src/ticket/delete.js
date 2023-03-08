import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../ticket/ticket.css";

function Delete() {
    const[movie,setMovie]=useState(null);
    const [movie_ID, setId] = useState();
    const [error, setError] = useState('');
    function del() {
        fetch("http://localhost:8080/movie/"+movie_ID).then(res => res.json()).then(res => setMovie(res));
        console.log(movie);
        axios.delete('http://localhost:8080/movie?id=' +movie_ID)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
        
    }
    return (


        <>
   
        <div class="panel">
            <div class="state"><br/><i class="tick booking"></i><h1>Delete Movie</h1></div>
            <div class="form">
                <input placeholder='enter movie id' type="text"  value={movie_ID} onChange={(e) => {setId(e.target.value)}}/>
                
                <div class="submit" onClick={del}>confirm</div>
            </div>
          
        </div>
        </> 

        
    );
}

export default Delete;