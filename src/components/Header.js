import React from "react";

function HeaderComponent() {
    return (
        <>
            <div class="row align-items-center text-center">
                <div class="col">
                    <div class="headerMenu d-inline-flex align-items-center">
                        <div>&#x2709;</div>
                        <div class="text-start d-md-block d-none">
                            <h5 class="p-0 m-0 text-uppercase">Email</h5>
                            <p class="p-0 m-0 text-secondary">rameshcse14@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div class="col border-start border-end">
                    <div class="headerMenu d-inline-flex align-items-center">
                        <div>
                            &#x260E;
                        </div>
                        <div class="text-start d-md-block d-none">
                            <h5 class="p-0 m-0 text-uppercase">Mobile</h5>
                            <p class="p-0 m-0 text-secondary">+91-994 141 1740</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="headerMenu d-inline-flex align-items-center">
                        <div>&#x27A4;</div>
                        <div class="text-start d-md-block d-none">
                            <h5 class="p-0 m-0 text-uppercase">Address</h5>
                            <p class="p-0 m-0 text-secondary">Nanganallur, Chennai, TamilNadu, India</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderComponent;