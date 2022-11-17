
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Movie from './Components/Movie/Movie';
import { Route, Routes, useLocation } from 'react-router-dom';
import Mov from './Components/Mov/Mov';
import AnimatePage from './Components/AnimatePage';
import {AnimatePresence}  from 'framer-motion';


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
  const location = useLocation()

  return (
        <div className="App">
              <AnimatePresence initial={false} exitBeforeEnter>
                <Routes  key={location.pathname} location={location}>
                  <Route path='/movies/:id' element={<Mov></Mov>}></Route>
                  
                    {load ? <Route exact path='/' element={<Movie data={data}></Movie>}></Route> : console.log('mmmmh')}
                
                </Routes>
            </AnimatePresence>
        </div>

  );
}

export default App;
