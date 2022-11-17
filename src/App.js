
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Movie from './Components/Movie/Movie';
import { Route, Routes } from 'react-router-dom';
import Mov from './Components/Mov/Mov';

function App() {

  useEffect(() => {
    try {
      axios.get("https://ghibliapi.herokuapp.com/films").then(res => {
        console.log(res.data)
        setData(res.data)
        setload(true)
      }
      )
    } catch (error) {
      
    }
  }, [])


  const [data, setData] = useState()
  const [load, setload] = useState(false)


  return (
    
    <div className="App">
      <Routes>
        <Route path='/movies/:id' element={<Mov></Mov>}></Route>
      {load ? <Route exact path='/ghibli-movies' element={<Movie data={data}></Movie>}></Route> : console.log('protu')}
      </Routes>

    </div>

  );
}

export default App;
