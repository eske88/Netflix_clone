import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function MoviePreview({ movie, active }) {
    const base_URL = "https://image.tmdb.org/t/p/original/";
    const [randomMatch, setRandomMatch] = useState();
    const [randomLength, setRandomLength] = useState();
    const [randomAge, setRandomAge] = useState();
    const [description, setDescription] = useState([""]);

    useEffect(() => {
        setRandomMatch(Math.floor(Math.random() * 30 + 70))
        setRandomLength(Math.floor(Math.random() * 59))
        setRandomAge(Math.floor(Math.random() * 13 + 3))
        const descriptions = ["Sentimental", "Dramakomedie", "Teen", "Mystery", "Dark", "Gritty", "Thiller", "Dramakomedie", "Dystopia", "Sitcom", "Suspensful"]
        const newArray = []
        for (let i = 0; i < 3; i++) {
            const randomString = descriptions[Math.floor(Math.random() * descriptions.length)]
            newArray.push(randomString);
        }
        setDescription(newArray)
    }, [])

    return (
        <div className={`pop-up ${active && "hovered"}`}>
            <img src={`${base_URL}${movie?.backdrop_path}`} alt="" />
            <div className="first-line">
                <h3>{movie.name || movie.original_title}</h3>
                <FontAwesomeIcon icon={faVolumeXmark} className="circle sound_button " />
            </div>
            <div className="icons">
                <div className="icons--left">
                    <FontAwesomeIcon icon={faCirclePlay} className="play_button" />
                    <FontAwesomeIcon icon={faPlus} className="circle circle_big" />
                    <FontAwesomeIcon icon={faThumbsUp} className="circle" />
                </div>
                <div className="icons--right">
                    <FontAwesomeIcon icon={faAngleDown} className="circle circle_big" />
                </div>
            </div>
            <div className="second-last-line">
                <h4 className="green"> {randomMatch}% match </h4>
                <h4 className="age_restriction">{randomAge}+</h4>
                <h4>1h {randomLength}min</h4>
                <h4 className="hd"> HD</h4>
            </div>
            <h4 className="last_line">{description[0]} &#8226;
                {description[1]} &#8226; {description[2]}
            </h4>
        </div>
    )
}

export default MoviePreview
