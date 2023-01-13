import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className="social_icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
                <div className="footer_grid">
                    <p><span>Audio Description</span>
                    </p>
                    <p><span>Help Center</span></p>
                    <p><span>Gift Cards</span></p>
                    <p><span>Meddia Center</span></p>
                    <p><span>Investor Relations</span></p>
                    <p><span>Jobs</span></p>
                    <p><span>Terms And Use</span></p>
                    <p><span>Privacy</span></p>
                    <p><span>Legal Notices</span></p>
                    <p><span>Cookie Preferences</span></p>
                    <p><span>Corporate Information</span></p>
                    <p><span>Contact Us</span></p>
                </div>
                <div className="service_code">
                    <p>Service Code</p>
                </div>
                <p className='copy_right'>&#169; 1997-2022 Netflix, Inc.</p>
            </div>

        </footer>
    )
}

export default Footer
