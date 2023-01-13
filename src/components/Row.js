import React, { useState, useEffect, createElement } from 'react'
import axios from "../axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Image from "../components/Image"
import { useRef } from 'react';


function Row({ title, fetchUrl, top10 }) {
    const [showTop, setShowTop] = useState(false);
    const [hoverRow, setHoverRow] = useState(false)
    const [hoverSlider, setHoverSlider] = useState(false)
    const [movies, setMovies] = useState([]);
    const [sliderValue, setSliderValue] = useState(0);
    const [randomMovie, setRandomMovie] = useState([])
    const [siblingAmountDisplay, setSiblingAmountDisplay] = useState(0);
    const [siblingAmount, setSiblingAmount] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const siblingElement = useRef(null);

    useEffect(() => {
        setShowTop(top10);
    }, [])

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    useEffect(() => {
        const movies = [];
        for (let i = 1; i <= 10; i++) {
            async function fetchData() {
                const request = await axios.get(fetchUrl)
                movies.push(request.data.results[i])
            }
            fetchData();
        }
        setRandomMovie(movies);
    }, [width])


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [width])


    useEffect(() => {
        setSiblingAmountDisplay(siblingElement.current.children.length)
        setSiblingAmount(window.getComputedStyle(siblingElement.current).getPropertyValue('--coloum_amount'))
        setItemCount(Math.ceil(siblingAmountDisplay / siblingAmount));
    }, [width, hoverRow])


    const progress = () => {
        const items = []
        for (let i = 0; i < itemCount; i++) {
            const div = createElement('div', { className: `progress_item ${i === sliderValue ? "active" : ""}` })
            items.push(div)
        }
        return items
    }

    useEffect(() => {
        siblingElement.current.style.setProperty("--slider-index", sliderValue)
    }, [sliderValue])


    function handleRightScoll() {
        setSliderValue(preValue => preValue + 1)
        if (sliderValue + 1 >= itemCount) {
            setSliderValue(0)
        }
        setShowLeftArrow(true)
    }

    function handleLeftScoll() {
        if (sliderValue <= 0) {
            setSliderValue(itemCount)
        }
        setSliderValue(preValue => preValue - 1)
    }


    return (
        <div className='row'
            onMouseOver={() => setHoverRow(true)}
            onMouseOut={() => setHoverRow(false)}>
            <div className="title_container">
                <h3>{title}</h3>
                <h4 className='title_container_text'
                >Explore All</h4>
                {hoverRow && <FontAwesomeIcon icon={faChevronRight} className="icon_animation" />}
                {hoverRow && <div className="progress_bar">
                    {progress()}
                </div>}
            </div>

            <div className="row_posters" onMouseOver={() => setHoverSlider(true)}
                onMouseOut={() => setHoverSlider(false)}>
                {showLeftArrow && <button className='scroll_left' onClick={handleLeftScoll}>
                    {hoverSlider && <FontAwesomeIcon icon={faChevronLeft} className="scroll_left_icon" />}
                </button>}

                <button className='scroll_right' onClick={handleRightScoll}>
                    {hoverSlider && <FontAwesomeIcon icon={faChevronRight} className="scroll_right_icon" />}
                </button>
                <div className="slider" ref={siblingElement}>
                    {showTop ? randomMovie.map(randomMovie => {
                        return randomMovie.backdrop_path === null ? "" :
                            <Image movie={randomMovie} top10={true} />
                    }) :
                        movies.map(movie => {
                            return movie.backdrop_path === null ? "" :
                                <Image movie={movie} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Row
