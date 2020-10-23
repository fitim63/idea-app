import React from "react";
import {faEnvelope, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer class="mt-auto">
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 footer-about wow fadeInUp">
                            <h3>Pershkrim per Kompanine</h3>
                            <p class="under-text">
                                Pershkrim i shkurte per kompanine.
                                Pershkrim i shkurte per kompanine.
                                Pershkrim i shkurte per kompanine.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
                            <h3>Na Kontaktoni</h3>
                            <p class="under-text"><FontAwesomeIcon icon={faMapMarkerAlt}/> Rr. Gustav Meyer, Prishtine,
                                1000</p>
                            <p><FontAwesomeIcon icon={faPhone}/> +383 44 123 456</p>
                            <p><FontAwesomeIcon icon={faEnvelope}/> email@email.com</p>
                        </div>
                        <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
                            <h3>Rrjetet Sociale</h3>
                            <link rel="stylesheet"
                                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                            <div className="col-md-6 col-12 footer-icon text-right">
                                <i className="fa fa-facebook" style={{color: ' #3b5998'}}/>
                                <i className="fa fa-instagram" style={{color: ' #e4405f '}}/>
                                <i className="fa fa-twitter" style={{color: ' #55acee '}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;