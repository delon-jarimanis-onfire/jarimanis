import React from 'react';
import {Fade} from 'react-reveal';

export default function Header() {
    return (
        <header className="spacing-sm sticky-top">
            <div className="container">
                <Fade bottom>
                    <div className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                         <span>jarimanis</span></a>
                        <div className="collapse-navbar-collapse ml-auto">
                        </div>
                    </div>
                </Fade>
            </div>
        </header>
    )
}