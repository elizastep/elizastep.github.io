
import React, { useState } from 'react';
import './About.css';


const About = () => {



    return (

        <div className='about-container'>
            <div className='maybe-grid'>
                <div align="left" className='text-div'>
                    <h2>Hi, I'm Elizabeth. </h2>
                    <p className='p_left_align'  >

                        I have been a hobby photographer for over 15 years.
                        In my spare time,
                        I also do some mathematics (which I have an MS and half of a PhD in).
                        Alongside mathematics, I do a bit of coding, use ai for fun, and weave.
                        Recently, I have begun to explore the world of color grading. Below
                        you can see my current colorist showreel. <br></br>

                    </p>

                    <p className='p_left_align'  >
                        I currently live in Norway, but have moved around quite a lot.
                        Other places I have called home are New Mexico, Colorado, Illinois,
                        and Texas in the US, as well as  Hungary and Austria in Europe.
                        Traveling is a favorite pastime of mine, and I have visited five
                        continents so far. Some of my favorite adventures have included
                        going skydiving over the Swiss alps, snorkeling in the Great Barrier
                        Reef, visiting the meeting point of the Mediterranean and the Atlantic
                        in Morocco, photographing puffins in northern Norway, and going on a
                        bear hike in Alaska.
                    </p>

                    <h2> Color grading</h2>
                    <iframe width="60%" height="20%" src="https://www.youtube.com/embed/yykqSbd-AqE?si=JD1pGv-lGTk5AjUJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <h2> maths </h2>
                    <p className='p_left_align'  >
                        <a href="https://scholar.google.com/citations?user=vjtUf70AAAAJ&hl=en">google scholar</a>
                    </p>
                    <p className='p_left_align'  >
                        <a href="https://orcid.org/0000-0002-6862-208X">ORCiD</a>
                    </p>

                    <p className='p_left_align'  >
                        {/* this stupid thing is needed to see all the stupid text */}
                        <br></br>
                    </p>

                </div>
                <div className='picture-div'>
                    <img
                        className='img_details'
                        src="/website_images/personal/yellow.jpg"
                        alt="hallstatt camera"
                        border="5px"
                    ></img>

                </div>
            </div >
        </div>




    );
};

export default About;
