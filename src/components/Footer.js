import React from 'react';

function Footer() {
    return (
        <footer className="bg-primary text-white py-5 bg-black pt-2 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-uppercase font-weight-bold">ABOUT US</h3>
                        <p className="my-3">
                            DUONG DONG DUONG - SE161070
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-uppercase font-weight-bold">CONTACT US</h3>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-map-marker-alt mr-2">  FPT CAMPUS HCM </i>
                                
                            </li>
                           
                           
                        </ul>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
