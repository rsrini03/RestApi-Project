import React,{useState,useEffect} from 'react'
import axios from 'axios';


   const Get1=()=>{
    const[mydata,setMydata]=useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:8080/movie")
        .then((response)=>{
            console.log(response.data)
            setMydata(response.data)
        })
    });
   
    return ( 

        <div className="grid">
            <h1>All Movies</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>movie_ID</th>
                        <th>movie_NAME</th>
                        <th>language</th>
                        <th>seat_AVAIL</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    mydata.map((data)=>{
                        return(
                           <tr key={data.movie_ID}>
                            <td>{data.movie_ID}</td>
                           <td>{data.movie_NAME}</td>
                           <td>{data.language}</td>
                           <td>{data.seat_AVAIL}</td>
                           <td>{data.price}</td>
                           </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
     );
}

export default Get1;