import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <span className="brand">jarimanis</span>
                        <p className="brand-tagline font weight-light">
                            #SamaSamaHepi
                        </p>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            About Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Start Up
                            </li>
                            <li className="list-group-item">
                                Goals
                            </li>
                            <li className="list-group-item">
                                Terms & Contidions
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            Connect with Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                onfire@gmail.com
                            </li>
                            <li className="list-group-item">
                                021 - 3423 - 4109
                            </li>
                            <li className="list-group-item">
                                <span>
                                    Kubu Raya, Kalimantan Barat
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2021 • All rights reserved •
                    </div>
                </div>
            </div>
        </footer>
    )
}