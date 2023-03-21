import React from "react";
import logo from '../assets/logo.png'
import Resume from '../assets/resume/Resume_Ramesk_K_UI Developer_Angular_React.pdf';
function NavbarComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark p-0 m-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className="img-reponsive" alt="Ramesh" height="40"
                        width="250" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a className="nav-link mx-2 active" aria-current="page" href="#scrollspyHeading1">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#scrollspyHeading2">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#scrollspyHeading3">Work Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#scrollspyHeading3">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#scrollspyHeading3">Portfolio</a>
                            </li>
                            
                            <li className="nav-item CV">
                                <a className="nav-link mx-2" href={Resume} download="Resume_Ramesh_K_UI_developer" target='_blank'>Download CV<span className="ms-2">&#x2192;</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent;