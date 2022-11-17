import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Mov.css"
import AnimatePage from '../AnimatePage'


export default function Mov() {

 
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [load, setLoad] = useState(false)

    const params = useParams()

    useEffect(() => {
        axios.get("https://ghibliapi.herokuapp.com/films/"+params.id).then(res =>{
            setData(res)
            setLoad(true)
        },[])
    })

   const movie = () => {
    if (load) {
        return(
            <AnimatePage>
                <div className='cont'>
                    <div className="banner" style={{backgroundImage: "url("+data.data.movie_banner+")"}}>
                    </div>

                    <div className="title">
                        <h1>{data.data.title}</h1>
                        <h2>{data.data.original_title}</h2>
                    </div>
                        <div className="desc">
                                <img className='image-mov' src={data.data.image}/>
                            <div className="subInfo">
                                <p>Director: {data.data.director}</p>
                                <p>Producer: {data.data.producer}</p>
                                <p>Release date: {data.data.release_date}</p>
                                <p>Time: {data.data.running_time} minutes 🕣</p>
                            </div>
                        </div>
                    
                        <p className='para'>{data.data.description}</p>
                        <div className="footer">
                        <h1 className='back' onClick={() => navigate(-1)}>Go Back ↩</h1>
                        </div>
                    </div> 
                 </AnimatePage>   
            )
    }
   }

  return (
    <Fragment>
       {movie()}
    </Fragment>
  )
}
