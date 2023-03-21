import React from "react";
import SecureNextLogo from '../../src/assets/company_logo/securenext.png'
import TISIndiaLogo from '../../src/assets/company_logo/tis_india.png'
import SeaantLogo from '../../src/assets/company_logo/seaant.png'
import CTSLogo from '../../src/assets/company_logo/cts.png'
import LTILOGO from '../../src/assets/company_logo/lti.png'

function WorkComponent() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 px-0">
                        <div class="main-timeline">
                            <div class="timeline">
                                <div class="timeline-icon">
                                    <img src={LTILOGO} alt="LTI" className="company_logo_odd" />
                                </div>
                                <div class="timeline-content">
                                    <h3 class="title">LTI Mindtree</h3>
                                    <h4 class="title">Specialist Product Engineering</h4>
                                    <h5 class="title">Nov 2021 - Present</h5>
                                    {/* <p class="description">
                                        Working as a UI developer in Angular/React. converting wireframe design into single page web applications. Managing and Guiding a team to fix the bugs and deliver on time.
                                    </p> */}
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="timeline-icon">
                                    <img src={CTSLogo} alt="CTS" className="company_logo_even" />
                                </div>
                                <div class="timeline-content">
                                    <h3 class="title">Cognizant Technology Solutions</h3>
                                    <h4 class="title">Associate Projects</h4>
                                    <h5 class="title">Aug 2018 - Nov 2021</h5>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="timeline-icon">
                                    <img src={SeaantLogo} alt="Seaant" className="company_logo_odd" />
                                </div>
                                <div class="timeline-content">
                                    <h3 class="title">Seaant Web Technologies</h3>
                                    <h4 class="title">UI Developer</h4>
                                    <h5 class="title">Nov 2016  - July 2018</h5>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="timeline-icon">
                                    <img src={TISIndiaLogo} alt="TIS India" className="company_logo_even" />
                                </div>
                                <div class="timeline-content">
                                    <h3 class="title">TAG Info Solutions India Private Limited</h3>
                                    <h4 class="title">Software Engineer</h4>
                                    <h5 class="title">Mar 2016  - July 2016</h5>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="timeline-icon">
                                    <img src={SecureNextLogo} alt="SecureNext" className="company_logo_odd" />
                                </div>
                                <div class="timeline-content">
                                    <h3 class="title">Securenext Software Private Limited</h3>
                                    <h4 class="title">Programmer</h4>
                                    <h5 class="title">Feb 2015  - Feb 2016</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkComponent;