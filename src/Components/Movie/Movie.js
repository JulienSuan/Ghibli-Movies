import React, { useState } from 'react'
import FlipMove from 'react-flip-move';
import "./Movie.css"
import { useNavigate } from 'react-router-dom';
import AnimatePage from '../AnimatePage';

export default function Movie({data}) {
    const navigate = useNavigate()

    console.log(data);

    const [slice, setSlice] = useState(data.length)


    const goTo = (id) => {
        navigate("/movies/"+id)
    }

  return (
    // <AnimatePage>
        <div className="div">
            <div className="fixbackground"></div>
            <div className="header">Studio Ghibli Movies ✨ <p style={{margin: "0"}}>WatchList comming soon ...</p></div>
        <FlipMove className='aya'>
                    
                {data
                .slice(0,slice).map(image => {
                    return (
                        <div className="div">
                            <AnimatePage>
                                <img key={image.id} src={image.image} className="image" onClick={() => goTo(image.id)}/>
                            </AnimatePage>
                        </div>
                    )
                })}
            </FlipMove>
        </div>
    /* </AnimatePage> */
  )
}
