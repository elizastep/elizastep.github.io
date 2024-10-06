import React from 'react';

import './About.css';

const About = () => {
    // const [selectedPhoto, setSelectedPhoto] = useState(null);
    const portrait_photos = [
        {
            src: '/website_images/portraits/michelle_monstera.JPG',
            alt: 'Michelle and monstera',
            text: 'Michelle and the monstera.'
        },
        {
            src: '/website_images/portraits/adam_karla_2.PNG',
            alt: 'Adam and Karla',
            text: 'The newlyweds.'
        },
        {
            src: '/website_images/portraits/ghosts_1.JPG',
            alt: 'Ghosts',
            text: 'Some ghosts have a spot of lunch at the Gloriette Café at Schönbrunn in Vienna, Austria.'
        },




    ];

    return (

        <div>
            <div className='primary'>
                <h2>Hi, I'm Elizabeth. </h2>
                <p className='p_left_align'  >

                    I have been a hobby photographer for over 15 years.
                    In my spare time,
                    I also do some mathematics (which I have an MS and half of a PhD in).
                    Alongside mathematics, I do a bit of coding, use ai for fun, and weave.
                    Recently, I have begun to explore the world of color grading. Below
                    you can see my current colorist showreel. <br></br>
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

                <p className='p_left_align'  >
                    To the right you can see photographs of some of my adventures.
                    Top: skydiving, snorkeling, and riding camels on the beach.
                    Middle: Digital artwork and the best cake I have made; a lavender earl gray cake
                    painted in buttercream frosting to resemble Starry, Starry Night.
                    Bottom: a few pictures of Plutarch, my travel puffin, in Osaka and Sydney,
                    and the time I attended a maths workshop in a castle in Germany.
                </p>
                <h2> Color grading</h2>
                <iframe width="90%" height="400px" src="https://www.youtube.com/embed/yykqSbd-AqE?si=JD1pGv-lGTk5AjUJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2>maths </h2>
                <p className='p_left_align'  >
                    <a href="https://scholar.google.com/citations?user=vjtUf70AAAAJ&hl=en">google scholar</a>
                </p>
                <p className='p_left_align'  >
                    <a href="https://orcid.org/0000-0002-6862-208X">ORCiD</a>
                </p>

            </div>
            <div className='secondary'>
                <img src="/website_images/personal/yellow.jpg" alt="Girl in a jacket" width="90%" ></img>
            </div>
            <div className='tertiary'>
                <img src="/website_images/personal/skydive.png" alt="Girl in a jacket" className='imagestyle_bl' ></img>
                {/* <img src="/website_images/personal/canon-2.jpg" alt="Girl in a jacket" className='imagestyle_bl'></img> */}
                <img src="/website_images/personal/snorkel.jpg" alt="Girl in a jacket" className='imagestyle_br'></img>
                <img src="/website_images/personal/camel.jpeg" alt="Girl in a jacket" className='imagestyle_bl'></img>
                {/* <img src="/website_images/personal/starrycake.jpg" alt="Girl in a jacket" width="500"></img> */}
                <img src="/website_images/art/murray.png" alt="Girl in a jacket" className='imagestyle_br'></img>

                <img src="/website_images/personal/starrycake2.jpg" alt="Girl in a jacket" className='imagestyle_bl'></img>
                <img src="/website_images/art/lemons.png" alt="Girl in a jacket" className='imagestyle_br'></img>

                {/* <img src="/website_images/personal/whitsunday.jpg" alt="Girl in a jacket" className='imagestyle_br'></img> */}
                <img src="/website_images/personal/osaka.jpg" alt="Girl in a jacket" className='imagestyle_br'></img>
                <img src="/website_images/personal/schloss.jpg" alt="Girl in a jacket" className='imagestyle_br'></img>

                <img src="/website_images/personal/sydney.jpg" alt="Girl in a jacket" className='imagestyle_br'></img>

            </div>
        </div >




    );
};

export default About;
