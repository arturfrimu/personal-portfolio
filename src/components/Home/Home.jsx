import React from 'react';

import johnSmithImage from "../../Images/john-smith.jpg";

const Home = () => {
    return <section className="section-1 center" id="section-1">
        <h1 className="section-1-heading">
            Web Developer
        </h1>
        <img src={johnSmithImage} alt="John Smith" className="person-img"/>
        <h3 className="person-name">John Smith</h3>
        <a href="#section-3" className="section-1-btn">Projects</a>
    </section>;
};

export default Home;