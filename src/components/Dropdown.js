import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { faSortUp } from "@fortawesome/free-solid-svg-icons"


function DropdownMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown_container">
            <button onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)} className="browse_button">
                Browse
                <FontAwesomeIcon icon={faSortDown} className="arrow_down_browse" />
                {isOpen && (
                    <ul className="drop_down">
                        <FontAwesomeIcon icon={faSortUp} className="arrow_up" />
                        <h3>Home</h3>
                        <h3>Series</h3>
                        <h3>Films</h3>
                        <h3>New & Popular</h3>
                        <h3>My List</h3>
                        <h3>Browse by Languages</h3>
                    </ul>
                )}
            </button>
        </div>
    );
};

export default DropdownMenu;