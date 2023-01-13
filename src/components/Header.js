import React, { useEffect, useState } from 'react'
import logoSeries from "../images/netflixSeries.png"
import axios from "../axios"
import requests from "../requests"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import request from "../requests";
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../components/Navbar"
import Row from "../components/Row"

function Header() {
    const base_URL = "https://image.tmdb.org/t/p/original/";

    const [movie, setMovie] = useState();
    const [randomAge, setRandomAge] = useState();

    useEffect(() => {
        setRandomAge(Math.floor(Math.random() * 13 + 3))
    }, [])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            const randomNumber = Math.floor(Math.random() * request.data.results.length)
            setMovie(request.data.results[randomNumber])
        }
        fetchData();
    }, [])

    return (
        <header style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to top, #141414, transparent), url("${base_URL}${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <Navbar />
            <div className="description--container" >
                <img src={logoSeries} alt="netflix Series" className='logo_series' />
                <h2>{movie?.name}</h2>
                <h3>{movie?.overview}</h3>
                <div className="button--container">
                    <button className="play">
                        <FontAwesomeIcon icon={faPlay} className="icon--button" />
                        <h2>Play</h2>
                    </button>
                    <button className="more_info">
                        <FontAwesomeIcon icon={faCircleInfo} className="icon--button" />
                        <h2>More Info</h2>
                    </button>
                    <div className="header_age_container">
                        {randomAge}+
                    </div>
                </div>
            </div>
            <Row title={"Top 10 TV Programmes in Denmark Today"} fetchUrl={request.fetchTrending} top10={true} />
        </header >
    )
}

export default Header
