import React, { useState } from 'react';
import Modal from './Modal';
import './Gallery.css'; // Ensure to style the gallery and modal

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const published_photos = [
        { src: '/website_images/klosterneuburg.jpg', alt: 'Klosterneuburg Merry-go-round', text: 'Klosterneuburg Merry-go-round. Published in Panel Magazine Issue #6.', link: 'https://panel-magazine.com/product/issue-6/' },
        { src: '/website_images/aja_monet.jpg', alt: 'aja monet', text: 'Aja Monet performing in Blå, Oslo, Norway, August 2024. Published by Oslo Jazz Festival.', link: 'https://www.facebook.com/100057787624620/photos/946606370608942/' },
        { src: '/website_images/somuah.jpg', alt: 'lightning trio', text: 'Peter Somuah performing with Aja Monet in Blå, Oslo, Norway, August 2024. Published in German Wikipedia.', link: 'https://de.wikipedia.org/wiki/Peter_Somuah' },
        { src: '/website_images/Lightning_trio_blur.jpg', alt: 'Lightning trio blur', text: 'Won third place in an Oslo Kamera Klubb photo competetition with theme Bevegelse (movement)', link: 'https://oslokameraklubb.no/konkurranser/jury/author_details/1022/8' },

        { src: '/website_images/grossband.jpg', alt: 'grossband', text: 'Grossband performing in Herr Nilsen, Oslo, Norway, August 2023. Published by jazzinorge.no.', link: 'https://jazzinorge.no/anmeldelse/gamle-og-nye-drommer/' },
        { src: '/website_images/Lightning_trio.jpg', alt: 'lightning trio', text: 'Lightning Trio performing in Herr Nilsen, Oslo, Norway, August 2023. Published by Gudbrandsdølen Dagningen.', link: 'https://www.google.com/imgres?q=elizabeth%20stephenson%20jazz%20foto&imgurl=https%3A%2F%2Fg.acdn.no%2Fobscura%2FAPI%2Fdynamic%2Fr1%2Fece5%2Ftr_1000_2000_s_f%2F0000%2Fgudb%2F2024%2F5%2F7%2F10%2FCred%252B-%252BElizabeth%252BStephenson.jpg%3Fchk%3DEF44E1&imgrefurl=https%3A%2F%2Fwww.gd.no%2Fsondre-droppet-fotballdrommen-og-ble-prisbelont-musiker-i-stedet%2Ff%2F5-18-2013448&docid=132-0xB144ubUM&tbnid=we8X6se77ZL9LM&vet=12ahUKEwjqztebmPKIAxXDi8MKHWvcNCUQM3oECHIQAA..i&w=1000&h=666&hcb=2&ved=2ahUKEwjqztebmPKIAxXDi8MKHWvcNCUQM3oECHIQAA' },
        { src: '/website_images/albali.PNG', alt: 'albali', text: 'Albali wine. Used in their social media. 2023.', link: 'https://www.instagram.com/p/CpHqqjLICPv/?igsh=MTJhaDUxeDE5ZjNmbg%3D%3D' },
        { src: '/website_images/kaufmans.JPG', alt: 'Kaufmanns', text: 'A birthday party at Kaufmanns, a boutique shop in Klosterneuburg, Austria. 2022. Used by Kaufmanns in their social media.', link: 'https://www.instagram.com/p/CjS70Q5qJBb/?igsh=MWt0MnY5ZDJ2YXR2dw==' },
        { src: '/website_images/kaufmans2.JPG', alt: 'Kaufmanns2', text: 'A birthday party at Kaufmanns, a boutique shop in Klosterneuburg, Austria. 2022. Used by Kaufmanns in their social media.', link: 'https://www.instagram.com/p/CjS70Q5qJBb/?igsh=MWt0MnY5ZDJ2YXR2dw==' },

        // { src: '/website_images/bygdin.PNG', alt: 'Bygdin Fjellhotel', text: 'View from a hotel room at Bygdin Fjellhotel, Norway. Used in their social media. 2022.', link: 'https://www.instagram.com/p/ClQrDpSKpoX/?igsh=aDV2b2oxOXBwc3Rh' },
        // { src: '/website_images/3.jpg', alt: 'Photo 1', text: 'klosterneuburg merry go round', link: 'http://www.google.com' },

    ];

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
        {
            src: '/website_images/portraits/urfuglen.jpg',
            alt: 'Urfuglen',
            text: 'Tuva Syvertsen and Ina Sagstuen playing during an Urfuglen soundcheck in Blå, Oslo, Norway.'
        },
        // { src: '/website_images/portraits/emilie-2.jpg', alt: 'Emilie', text: 'Emilie. Oslo, Norway.' },
        {
            src: '/website_images/portraits/emilie_book.jpg',
            alt: 'Reading a book',
            text: 'Blue book hour. Oslo, Norway.'
        },

        {
            src: '/website_images/portraits/tanya_photo.png',
            alt: 'Photographer',
            text: 'Tanya. Klosterneuburg, Austria.'
        },
        {
            src: '/website_images/portraits/tanya_23.jpg',
            alt: 'Colorful hair clips',
            text: 'Tanya. Klosterneuburg, Austria.'
        },
        {
            src: '/website_images/portraits/sarath.PNG',
            alt: 'joy and hair',
            text: 'Sarath. Klosterneuburg, Austria.'
        },
        {
            src: '/website_images/portraits/me.jpg',
            alt: 'dark monstera',
            text: 'Self-portait with monstera. Klosterneuburg, Austria.'
        },
        // { src: '/website_images/personal/9_x_9_grid_discombobulate.jpg', alt: 'Discombobulate', text: 'Self-portrait. Klosterneuburg, Austria.' },

    ];

    const city_photos = [
        {
            src: '/website_images/city/cartier.JPG',
            alt: 'vienna',
            text: 'A mother and daughter study a Cartier display window in Vienna, Austria.',
        },
        {
            src: '/website_images/city/vienna_bike-3.JPG',
            alt: 'bicyclists',
            text: 'Bicyclists race down a shopping street in Vienna, Austria. I took this shot by panning my camera to follow the cyclists with a slow shutter speed. This technique creates a blurred background while keeping the subject in focus.',
            style: { objectPosition: "bottom right" }
        },
        {
            src: '/website_images/city/trondheim_seagull.PNG',
            alt: 'seagull',
            text: 'A seagull swoops in to grab a leftover snack from a café in Trondheim, Norway.',
        },
        {
            src: '/website_images/city/kburg_fruitseller.PNG',
            alt: 'fruit seller',
            text: 'A small market selling fruit in the snow in Klosterneuburg, Austria.',
        },
        {
            src: '/website_images/city/mannequins-3.jpg',
            alt: 'mannequins',
            text: 'During the pandemic, two mannequins wearing masks are displayed in a store window. Behind them is a poster of a woman seemingly in agony. Vienna, Austria.',
        },
        {
            src: '/website_images/city/reflections.jpg',
            alt: 'reflections',
            text: 'Sunset reflection of Stephansdom in Haas Haus, Vienna, Austria.',
        },
        {
            src: '/website_images/city/shopping_street_wien.JPG',
            alt: 'reflections',
            text: 'A sunny afternoon in Vienna, Austria.',
        },
        {
            src: '/website_images/city/bar.PNG',
            alt: 'bar',
            text: 'Peeking into a cozy bar from outside. Vienna, Austria.',
        },
        {
            src: '/website_images/city/kburg_snow.jpg',
            alt: 'snow',
            text: 'Winter décor near Rathausplatz in Klosterneuburg, Austria.',
        },
    ];

    const animal_photos = [
        { src: '/website_images/animals_birds/sheep.JPG', alt: 'sheep slurp', text: 'A satisfied sheep licks its lips after a nice snack. Somewhere in the mountains of Norway.' },
        { src: '/website_images/animals_birds/puffin.JPG', alt: 'puffin profile', text: 'A puffin sits on a rock, waiting to dive into the ocean. Runde, Norway.' },
        { src: '/website_images/animals_birds/puffin_2.JPG', alt: 'puffin portrait', text: 'A puffin plays peekaboo from behind a clump of grass in Runde, Norway.' },
        { src: '/website_images/animals_birds/nursing_sheep.JPG', alt: 'mamma sheep', text: 'A mother sheep nurses her young. Runde, Norway.' },
        { src: '/website_images/animals_birds/multiple_sheeps.JPG', alt: 'sheeps', text: 'Sheep rest after lunch in Runde, Norway.' },
        { src: '/website_images/animals_birds/hallstattcatt.JPG', alt: 'meow', text: 'A cozy cat taking a nap in Hallstatt, Austria.' },
        { src: '/website_images/animals_birds/pigeon.JPG', alt: 'pigeon', text: 'A plump pigeon patrols a beach in Drammen, Norway.' },
        { src: '/website_images/animals_birds/velcro.JPG', alt: 'meow again', text: 'Velcro the cat takes a luxurious nap in a ray of sunshine. Klosterneuburg, Austria.' },
        { src: '/website_images/animals_birds/bear-4.jpg', alt: 'bear', text: 'A brown bear walks along the beach in search of a snack in Chinitna Bay, Alaska, USA.' },

    ];

    const nature_photos = [
        { src: '/website_images/nature_insects/fish_hanging_2.PNG', alt: 'fish hanging', text: 'A rack of cod hanging to dry in Lofoten, Norway.' },
        { src: '/website_images/nature_insects/sunset_ocean.JPG', alt: 'sunset on the ocean', text: 'Sunset over the ocean in Lofoten, Norway.' },
        { src: '/website_images/nature_insects/small_cactus.PNG', alt: 'desert plant', text: 'A tiny plant peeks up through the sand in White Sands, New Mexico, USA.' },
        { src: '/website_images/nature_insects/apples.JPG', alt: 'apples', text: 'Apples hanging from a tree in Flåm, Norway.' },
        { src: '/website_images/nature_insects/bee.JPG', alt: 'bee', text: 'A bee gathers pollen from a dandelion in Klosterneuburg, Austria.' },
        { src: '/website_images/nature_insects/cactus.JPG', alt: 'cactus', text: 'A beautiful cactus plant in Las Cruces, New Mexico.' },
        { src: '/website_images/nature_insects/grasshopper.JPG', alt: 'grasshopper', text: 'A grasshopper thinks about life in Las Cruces, New Mexico, USA.' },
        { src: '/website_images/nature_insects/mushroom.JPG', alt: 'mushroom', text: 'A toxic mushroom peeks invitingly from its hiding spot. Near Geilo, Norway.' },
        { src: '/website_images/nature_insects/rorbu.PNG', alt: 'rorbu', text: 'A traditional seaside hut in Lofoten, Norway.' },

    ];

    const commercial_photos = [
        { src: '/website_images/indoor_commercial/vase.PNG', alt: 'vase', text: 'Photo of a minimalist modern flower vase and candle.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/candle.JPG', alt: 'candle', text: 'A candle drips in dramatic lighting.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/cosy.JPG', alt: 'cosy', text: 'A cosy candle with a fluffy background.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/xmas.JPG', alt: 'christmas', text: 'Window light shines through a Christmas tree, contrasting with the trees outside of the window.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/splash.JPG', alt: 'fruit splash', text: 'Fruit splashes into water.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/leaf.JPG', alt: 'plant closeup', text: 'A closeup of a leaf with a smooth bokeh background.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/candle_petals.JPG', alt: 'candle with petals', text: 'A product shot of a coffee-scented homemade candle.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/leaves_crisscross.JPG', alt: 'palm leaves', text: 'Light plays through criss-crossed palm leaves, forming interesting shadows below.', classname: 'gallery-photo' },
        { src: '/website_images/indoor_commercial/horse_figurine.JPG', alt: 'horse figure', text: 'A Japanese kinetic sculpture of a horseback rider casts an interesting shadow in the long afternoon sun.', classname: 'gallery-photo-bl' },


    ];

    const food_photos = [
        { src: '/website_images/food/champagne.PNG', alt: 'cheers!', text: 'Preparing to toast in a new year.' },
        { src: '/website_images/food/bun.JPG', alt: 'cardamom', text: 'A delicious cardamom bun.' },
        { src: '/website_images/food/steak.JPG', alt: 'steak', text: 'A seasoned steak is ready for the grill.' },
        { src: '/website_images/food/ferrero.jpg', alt: 'chocolates', text: 'Ferrero Rocher chocolates against a smooth bokeh backround with celebratory ribbons.' },
        { src: '/website_images/food/fancy.png', alt: 'entremet', text: 'A delicious entremet from Pascal.' },

        { src: '/website_images/food/cocoa.JPG', alt: 'cocoa', text: 'Hot cocoa topped with whipped cream and chocolate stars.' },
        { src: '/website_images/food/wine_swirl-2.jpg', alt: 'red wine', text: 'Red wine swirls invitingly in a glass against a smooth bokeh background.' },
        { src: '/website_images/food/coffee-4.jpg', alt: 'coffee drip', text: 'Coffee drips from a machine into the waiting coffee cup beneath.' },
        { src: '/website_images/food/spread_2.JPG', alt: 'charcuterie', text: 'A spread of various charcuterie is pictured from above.' },
    ];

    return (
        <>
            {/* Block of text above the gallery */}

            < div  >
                <h1 className='h1_photo_gallery'>photo gallery</h1>
                <body> subject-centric · playful · in-the-moment</body>
                <p>
                    some of my published photos:
                </p>
            </div >
            {/* PUBLISHED PHOTOS */}
            <div className="gallery-container-links">

                {published_photos.map((photo, index) => (
                    <div className='photo'>
                        <img
                            key={index}
                            src={photo.src}
                            alt={photo.alt}
                            className="gallery-photo"
                            onClick={() => setSelectedPhoto(photo)} // Set the selected photo when clicked
                        />
                        <span> {photo.text} <a href={photo.link}>link</a> </span>

                    </div>


                ))}
            </div >

            < div  >
                <p>
                    portraiture
                </p>
            </div >

            {/* OTHER PHOTOS */}

            <div className="gallery-container">

                {portrait_photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="gallery-photo"
                        onClick={() => setSelectedPhoto(photo)} // Set the selected photo when clicked
                    />
                ))}

            </div>
            < div  >
                <p>
                    cityscapes
                </p>
            </div >

            {/* OTHER PHOTOS */}

            <div className="gallery-container">

                {city_photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        // this allows individual control over photo alignment
                        className="gallery-photo"
                        style={photo.style}
                        onClick={() => setSelectedPhoto(photo)} // Set the selected photo when clicked
                    />
                ))}
            </div>

            < div  >
                <p>
                    animals
                </p>
            </div >

            {/* OTHER PHOTOS */}

            <div className="gallery-container">

                {animal_photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="gallery-photo"
                        onClick={() => setSelectedPhoto(photo)} // Set the selected photo when clicked
                    />
                ))}
            </div>

            < div  >
                <p>
                    nature
                </p>
            </div >

            {/* OTHER PHOTOS */}

            <div className="gallery-container">

                {nature_photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="gallery-photo"
                        onClick={() => setSelectedPhoto(photo)} // Set the selected photo when clicked
                    />
                ))}
            </div>

            < div  >
                <p>
                    commercial
                </p>
            </div >

            {/* OTHER PHOTOS */}

            <div className="gallery-container">

                {commercial_photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="gallery-photo"
                        onClick={() => setSelectedPhoto(photo)} // Set the selected photo when clicked
                    />
                ))}
            </div>

            < div  >
                <p>
                    food
                </p>
            </div >

            {/* OTHER PHOTOS */}

            <div className="gallery-container">

                {food_photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="gallery-photo"
                        onClick={() => setSelectedPhoto(photo)} // Set the selected photo when clicked
                    />
                ))}
            </div>
            {/* Show the modal when a photo is selected */}
            {selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />}
        </>
    );
};

export default Gallery;
