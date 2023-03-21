import React from 'react';
import banner from '../assets/banner-image.png'

function HomeComponent() {
    return (
        <>
            <div className="container d-flex" style={{ minHeight: "300px", background: "#ccc" }} >
                <div className="col-lg-6 d-lg-block d-md-block d-none mt-5 pt-5 align-items-center">
                    <h1 style={{fontSize: "7rem"}} className="mb-0 mt-4 mx-5">Hi,</h1>
                    <h1 style={{fontSize: "5.5rem"}} className="mb-0 mx-5">I'm Ramesh </h1>
                    <h4 className='mt-4 mx-5'>I'm a passionate web developer who enjoys creating beautiful and functional user interfaces, 
                        and is inspired to stay up-to-date with the latest tools, technologies, and trends in the industry.</h4>
                </div>
                <div className="col-lg-6 col-sm-12 sm-text-center" style={{ textAlign: "right" }}>
                    <img src={banner} className="w-100" />
                </div>
            </div>
        </>
    )
}

export default HomeComponent;