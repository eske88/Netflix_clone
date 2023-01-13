import React, { useEffect, useState } from 'react'
import logoN from "../images/netflixN.png"
import newSeason from "../images/newSeason.png"
import MoviePreview from "../components/MoviePreview"
import top10Logo from "../images/top10.png"

function Image({ movie, top10 }) {
    const base_URL = "https://image.tmdb.org/t/p/original/";
    const [randomNumber, setRandomNumber] = useState(0)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100))
    }, [])



    return (
        <div className={`images ${top10 && "top10"}`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <MoviePreview movie={movie} active={hover} />
            <div className="overflow_hidden">
                {randomNumber > 70 && <img src={logoN} alt="" className='logoN' />}
                {randomNumber < 20 && <img src={newSeason} alt="" className='new_season' />}
                {randomNumber > 50 && randomNumber < 70 && <img src={top10Logo} alt="" className='top_10_logo' />}
                <img src={`${base_URL}${top10 ? movie?.poster_path :
                    movie?.backdrop_path}`} alt="" key={movie?.id} className="row_image" />
            </div>
        </div>
    )
}

export default Image
