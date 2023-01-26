import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className='footer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path 
                        fill="#001220" 
                        fill-opacity="1" 
                        d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,202.7C672,213,768,171,864,133.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div className='row justify-content-center footer-content'>
                <div className="col-md-6">
                    <div className="div">
                        <p>Designed and Developed by</p>
                        <hr />
                        <div className='d-flex justify-content-between px-2'>
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaMailBulk/>
                            <FaLinkedin/>
                            <FaGithub/>
                        </div>
                        <hr />
                        <br />
                        <p>Douglas M. Rokakis</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer