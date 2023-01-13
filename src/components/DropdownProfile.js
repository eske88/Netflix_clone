import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faSortUp } from "@fortawesome/free-solid-svg-icons"
import { faDolly } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons"
import yellowLogo from "../images/yellow.jpg"
import redLogo from "../images/red.jpg"
import darkBlueLogo from "../images/darkblue.jpg"
import greenLogo from "../images/green.jpg"


function DropdownProfile() {
    return (
        <ul className="drop_down_profile">
            <div className="profiles">
                <FontAwesomeIcon icon={faSortUp} className="arrow_up_profile " />
                <div className="henriette">
                    <img src={greenLogo} alt="" className='profile_pic' />
                    <p>Henriette</p>
                </div>
                <div className="lina">
                    <img src={darkBlueLogo} alt="" className='profile_pic' />
                    <p>Lina</p>
                </div>
                <div className="lars">
                    <img src={yellowLogo} alt="" className='profile_pic' />
                    <p>Lars</p>
                </div>
                <div className="alma">
                    <img src={redLogo} alt="" className='profile_pic' />
                    <p>Alma</p>
                </div>
            </div>

            <div className="settings">
                <div className="manage">
                    <FontAwesomeIcon icon={faPen} />
                    <p>Manage Profile</p>
                </div>
                <div className="transfer">
                    <FontAwesomeIcon icon={faDolly} />
                    <p>Transfer Profile </p>
                </div>
                <div className="account">
                    <FontAwesomeIcon icon={faUser} />
                    <p>Account</p>
                </div>
                <div className="help">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p>Help</p>
                </div>
            </div>
            <div className="sign_out">
                <p>Sign out of Netflix</p>
            </div>
        </ul>
    );
};

export default DropdownProfile;