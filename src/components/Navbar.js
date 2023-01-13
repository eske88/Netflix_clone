import React, { useEffect, useState } from 'react'
import logo from "../images/netflixlogo.png"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Dropdown from '../components/Dropdown'
import DropdownProfile from '../components/DropdownProfile'
import profile from "../images/netflixProfile.jpg"


function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        };
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    
    return (
        <div>
            <div className={`sticky ${scroll && "scroll"}`} >
                <img src={logo} className='logo' />
                <div className="left--header ">
                    <h3>Home</h3>
                    <h3>Series</h3>
                    <h3>Films</h3>
                    <h3>New & Popular</h3>
                    <h3>My List</h3>
                    <h3>Browse by Languages</h3>
                </div>
                <Dropdown />
                <div className="right--header">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faBell} />
                    <div className="profile"
                        onMouseOver={() => setIsOpen(true)}
                        onMouseOut={() => setIsOpen(false)}
                    >
                        <img src={profile} alt="netflix profile" className='profile_pic' />
                        <FontAwesomeIcon icon={faSortDown} className="arrow_down" />
                        {isOpen && <DropdownProfile />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
