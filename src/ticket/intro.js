// import "../ticket/intro.css"
import Movies from "./postmv";
import Ticket from "./ticket";
import Delete from "./delete";

import Get1 from "./get";
import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';

function Intro() {
    return (  
        <Router>
      <ul class="nav">
  <li class="nav-item">
    <Link to="/Movies" class="nav-link active">MovieRegistration</Link>
  </li>
  <li class="nav-item">
    <Link to="/Ticket" class="nav-link">TicketBooking</Link>
  </li>
   <li class="nav-item">
  <Link to="/Delete" class="nav-link" >DeleteMovie</Link>
  </li> 
   <li class="nav-item">
  <Link to="/Get1" class="nav-link" >todayMoviesDetails</Link>
  </li> 
</ul>
<Routes>
  <Route path="/Movies" element={<Movies/>}/>
  <Route path="/Ticket" element={<Ticket/>}/>
  <Route path="/Delete" element={<Delete/>}/>
  <Route path="/Get1" element={<Get1/>}/>
  
</Routes>
    </Router>
    );
}

export default Intro;