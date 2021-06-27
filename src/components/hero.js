import React from 'react';
import {Fade} from 'react-reveal';
import HeroImg1 from '../assets/images/HeroImg1.png';

export default function Hero() {
    return (
        <section className="pt-4 hero">
            <div className="container">
                <div className="row align-item-center" style={{ width: "360" }}>
                    <Fade right delay={300}>
                        <div className="col-auto pr-5">
                            <h1 className="font-weight-bold my-5">
                                Ambil HP mu, buka jarimanis!
                        </h1>
                            <p className="mb-5 text-hero font-weight-light text-gray w-75 mt-3">
                                Pandemi bikin usahamu down? <br />
                            Punya dana tapi bingung mau diapain? <br />
                            1 jawaban. JARIMANIS!
                        </p>
                            <button className="btn btn-shop btn-primary" >
                                Get it NOW!
                        </button>
                            <div className="row  icons-hero mt-100">
                                <div className="col-auto icons">
                                    <i className="far fa-paper-plane icon"></i>
                                    <h6 className="mt-3">
                                        Akses Pinjaman TERAMAN! <br />
                                        <span className="text-gray-500 font-weight-light">
                                            P2P
                                    </span>
                                    </h6>
                                </div>
                                <div className="col-auto icons">
                                    <i className="fas fa-tag"></i>
                                    <h6 className="mt-3">
                                        Lokasi Sekali KLIK! <br />
                                        <span className="text-gray-500 font-weight-light">
                                            CariLapak
                                    </span>
                                    </h6>
                                </div>
                                <div className="col-auto icons">
                                    <i className="fas fa-undo-alt"></i>
                                    <h6 className="mt-3">
                                        Rekan, Bukan Sekedar Layar! <br />
                                        <span className="text-gray-500 font-weight-light">
                                            Format Aplikasi Interaktif
                                    </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <div className="col-5 offset-md-1 pl-5 hero-img">
                        <Fade bottom delay={350}>
                            <div >
                                <img src={HeroImg1} alt="my-hero" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}