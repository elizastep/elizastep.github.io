import React, { useState } from 'react';
import Modal from './Modal';
import './Gallery.css'; // Ensure to style the gallery and modal

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // NOTE: for thumbnail compressions: 
    // Bridge, tools, photoshop, image processor, qual 8, 800x800px (makes max len 800)
    const published_photos = [
        {
            full: '/website_images/published/klosterneuburg.jpg',
            src: '/website_images/published/thumbnails/klosterneuburg.jpg',
            alt: 'Klosterneuburg Merry-go-round',
            text: 'Klosterneuburg Merry-go-round. Published in Panel Magazine Issue #6.',
            link: 'https://panel-magazine.com/product/issue-6/'
        },
        {
            full: '/website_images/published/aja_monet.jpg',
            src: '/website_images/published/thumbnails/aja_monet.jpg',
            alt: 'aja monet',
            text: 'Aja Monet performing in Blå, Oslo, Norway, August 2024. Published by Oslo Jazz Festival.',
            link: 'https://www.facebook.com/100057787624620/photos/946606370608942/'
        },
        {
            full: '/website_images/published/somuah.jpg',
            src: '/website_images/published/thumbnails/somuah.jpg',
            alt: 'lightning trio',
            text: 'Peter Somuah performing with Aja Monet in Blå, Oslo, Norway, August 2024. Published in German Wikipedia.',
            link: 'https://de.wikipedia.org/wiki/Peter_Somuah'
        },
        {
            full: '/website_images/published/Lightning_trio_blur.jpg',
            src: '/website_images/published/thumbnails/Lightning_trio_blur.jpg',
            alt: 'Lightning trio blur',
            text: 'Won third place in an Oslo Kamera Klubb photo competetition with theme Bevegelse (movement)',
            link: 'https://oslokameraklubb.no/konkurranser/jury/author_details/1022/8'
        },

        {
            full: '/website_images/published/grossband.jpg',
            src: '/website_images/published/thumbnails/grossband.jpg',
            alt: 'grossband',
            text: 'Grossband performing in Herr Nilsen, Oslo, Norway, August 2023. Published by jazzinorge.no.',
            link: 'https://jazzinorge.no/anmeldelse/gamle-og-nye-drommer/'
        },
        {
            full: '/website_images/published/Lightning_trio.jpg',
            src: '/website_images/published/thumbnails/Lightning_trio.jpg',
            alt: 'lightning trio',
            text: 'Lightning Trio performing in Herr Nilsen, Oslo, Norway, August 2023. Published by Gudbrandsdølen Dagningen.',
            link: 'https://www.google.com/imgres?q=elizabeth%20stephenson%20jazz%20foto&imgurl=https%3A%2F%2Fg.acdn.no%2Fobscura%2FAPI%2Fdynamic%2Fr1%2Fece5%2Ftr_1000_2000_s_f%2F0000%2Fgudb%2F2024%2F5%2F7%2F10%2FCred%252B-%252BElizabeth%252BStephenson.jpg%3Fchk%3DEF44E1&imgrefurl=https%3A%2F%2Fwww.gd.no%2Fsondre-droppet-fotballdrommen-og-ble-prisbelont-musiker-i-stedet%2Ff%2F5-18-2013448&docid=132-0xB144ubUM&tbnid=we8X6se77ZL9LM&vet=12ahUKEwjqztebmPKIAxXDi8MKHWvcNCUQM3oECHIQAA..i&w=1000&h=666&hcb=2&ved=2ahUKEwjqztebmPKIAxXDi8MKHWvcNCUQM3oECHIQAA'
        },
        {
            full: '/website_images/published/albali.PNG',
            src: '/website_images/published/thumbnails/albali.jpg',
            alt: 'albali',
            text: 'Albali wine. Used in their social media. 2023.',
            link: 'https://www.instagram.com/p/CpHqqjLICPv/?igsh=MTJhaDUxeDE5ZjNmbg%3D%3D'
        },
        {
            full: '/website_images/published/kaufmans.JPG',
            src: '/website_images/published/thumbnails/kaufmans.jpg',
            alt: 'Kaufmanns',
            text: 'A birthday party at Kaufmanns, a boutique shop in Klosterneuburg, Austria. 2022. Used by Kaufmanns in their social media.',
            link: 'https://www.instagram.com/p/CjS70Q5qJBb/?igsh=MWt0MnY5ZDJ2YXR2dw=='
        },
        {
            full: '/website_images/published/kaufmans2.JPG',
            src: '/website_images/published/thumbnails/kaufmans2.jpg',
            alt: 'Kaufmanns2',
            text: 'A birthday party at Kaufmanns, a boutique shop in Klosterneuburg, Austria. 2022. Used by Kaufmanns in their social media.',
            link: 'https://www.instagram.com/p/CjS70Q5qJBb/?igsh=MWt0MnY5ZDJ2YXR2dw=='
        },

        // { src: '/website_images/bygdin.PNG', alt: 'Bygdin Fjellhotel', text: 'View from a hotel room at Bygdin Fjellhotel, Norway. Used in their social media. 2022.', link: 'https://www.instagram.com/p/ClQrDpSKpoX/?igsh=aDV2b2oxOXBwc3Rh' },
        // { src: '/website_images/3.jpg', alt: 'Photo 1', text: 'klosterneuburg merry go round', link: 'http://www.google.com' },

    ];

    const portrait_photos = [
        {
            full: '/website_images/portraits/michelle_monstera.JPG',
            src: "/website_images/portraits/thumbnails/michelle_monstera.jpg",
            alt: 'Michelle and monstera',
            text: 'Michelle and the monstera.'
        },
        {
            full: '/website_images/portraits/adam_karla_2.PNG',
            src: "/website_images/portraits/thumbnails/adam_karla_2.jpg",
            alt: 'Adam and Karla',
            text: 'The newlyweds.'
        },
        {
            full: '/website_images/portraits/ghosts_1.JPG',
            src: "/website_images/portraits/thumbnails/ghosts_1.jpg",
            alt: 'Ghosts',
            text: 'Some ghosts have a spot of lunch at the Gloriette Café at Schönbrunn in Vienna, Austria.'
        },
        {
            full: '/website_images/portraits/urfuglen.jpg',
            src: "/website_images/portraits/thumbnails/urfuglen.jpg",
            alt: 'Urfuglen',
            text: 'Tuva Syvertsen and Ina Sagstuen playing during an Urfuglen soundcheck in Blå, Oslo, Norway.'
        },
        // { src: '/website_images/portraits/emilie-2.jpg', alt: 'Emilie', text: 'Emilie. Oslo, Norway.' },
        {
            full: '/website_images/portraits/emilie_book.jpg',
            src: "/website_images/portraits/thumbnails/emilie_book.jpg",
            alt: 'Reading a book',
            text: 'Blue book hour. Oslo, Norway.'
        },

        {
            full: '/website_images/portraits/tanya_photo.png',
            src: "/website_images/portraits/thumbnails/tanya_photo.jpg",
            alt: 'Photographer',
            text: 'Tanya. Klosterneuburg, Austria.'
        },
        {
            full: '/website_images/portraits/tanya_23.jpg',
            src: "/website_images/portraits/thumbnails/tanya_23.jpg",
            alt: 'Colorful hair clips',
            text: 'Tanya. Klosterneuburg, Austria.'
        },
        {
            full: '/website_images/portraits/sarath.PNG',
            src: "/website_images/portraits/thumbnails/sarath.jpg",
            alt: 'joy and hair',
            text: 'Sarath. Klosterneuburg, Austria.'
        },
        {
            full: '/website_images/portraits/me.jpg',
            src: "/website_images/portraits/thumbnails/me.jpg",
            alt: 'dark monstera',
            text: 'Self-portait with monstera. Klosterneuburg, Austria.'
        },
        // { src: '/website_images/personal/9_x_9_grid_discombobulate.jpg', alt: 'Discombobulate', text: 'Self-portrait. Klosterneuburg, Austria.' },

    ];

    const city_photos = [
        {
            full: '/website_images/city/cartier.JPG',
            src: '/website_images/city/thumbnails/cartier.jpg',
            alt: 'vienna',
            text: 'A mother and daughter study a Cartier display window in Vienna, Austria.',
        },
        {
            full: '/website_images/city/vienna_bike-3.jpg',
            src: '/website_images/city/thumbnails/vienna_bike-3.jpg',
            alt: 'bicyclists',
            text: 'Bicyclists race down a shopping street in Vienna, Austria. I took this shot by panning my camera to follow the cyclists with a slow shutter speed. This technique creates a blurred background while keeping the subject in focus.',
            style: { objectPosition: "bottom right" }
        },
        {
            full: '/website_images/city/trondheim_seagull.PNG',
            src: '/website_images/city/thumbnails/trondheim_seagull.jpg',
            alt: 'seagull',
            text: 'A seagull swoops in to grab a leftover snack from a café in Trondheim, Norway.',
        },
        {
            full: '/website_images/city/kburg_fruitseller.PNG',
            src: '/website_images/city/thumbnails/kburg_fruitseller.jpg',
            alt: 'fruit seller',
            text: 'A small market selling fruit in the snow in Klosterneuburg, Austria.',
        },
        {
            full: '/website_images/city/mannequins-3.jpg',
            src: '/website_images/city/thumbnails/mannequins-3.jpg',
            alt: 'mannequins',
            text: 'During the pandemic, two mannequins wearing masks are displayed in a store window. Behind them is a poster of a woman seemingly in agony. Vienna, Austria.',
        },
        {
            full: '/website_images/city/reflections.jpg',
            src: '/website_images/city/thumbnails/reflections.jpg',
            alt: 'reflections',
            text: 'Sunset reflection of Stephansdom in Haas Haus, Vienna, Austria.',
        },
        {
            full: '/website_images/city/shopping_street_wien.JPG',
            src: '/website_images/city/thumbnails/shopping_street_wien.jpg',
            alt: 'reflections',
            text: 'A sunny afternoon in Vienna, Austria.',
        },
        {
            full: '/website_images/city/bar.PNG',
            src: '/website_images/city/thumbnails/bar.jpg',
            alt: 'bar',
            text: 'Peeking into a cozy bar from outside. Vienna, Austria.',
        },
        {
            full: '/website_images/city/kburg_snow.jpg',
            src: '/website_images/city/thumbnails/kburg_snow.jpg',
            alt: 'snow',
            text: 'Winter décor near Rathausplatz in Klosterneuburg, Austria.',
        },
    ];

    const animal_photos = [
        {
            full: '/website_images/animals_birds/sheep.JPG',
            src: '/website_images/animals_birds/thumbnails/sheep.jpg',
            alt: 'sheep slurp',
            text: 'A satisfied sheep licks its lips after a nice snack. Somewhere in the mountains of Norway.'
        },
        {
            full: '/website_images/animals_birds/puffin.JPG',
            src: '/website_images/animals_birds/thumbnails/puffin.jpg',
            alt: 'puffin profile',
            text: 'A puffin sits on a rock, waiting to dive into the ocean. Runde, Norway.'
        },
        {
            full: '/website_images/animals_birds/puffin_2.JPG',
            src: '/website_images/animals_birds/thumbnails/puffin_2.jpg',
            alt: 'puffin portrait',
            text: 'A puffin plays peekaboo from behind a clump of grass in Runde, Norway.'
        },
        {
            full: '/website_images/animals_birds/nursing_sheep.JPG',
            src: '/website_images/animals_birds/thumbnails/nursing_sheep.jpg',
            alt: 'mamma sheep',
            text: 'A mother sheep nurses her young. Runde, Norway.'
        },
        {
            full: '/website_images/animals_birds/multiple_sheeps.JPG',
            src: '/website_images/animals_birds/thumbnails/multiple_sheeps.jpg',
            alt: 'sheeps',
            text: 'Sheep rest after lunch in Runde, Norway.'
        },
        {
            full: '/website_images/animals_birds/hallstattcatt.jpg',
            src: '/website_images/animals_birds/thumbnails/hallstattcatt.jpg',
            alt: 'meow',
            text: 'A cozy cat taking a nap in Hallstatt, Austria.'
        },
        {
            full: '/website_images/animals_birds/pigeon.JPG',
            src: '/website_images/animals_birds/thumbnails/pigeon.jpg',
            alt: 'pigeon',
            text: 'A plump pigeon patrols a beach in Drammen, Norway.'
        },
        {
            full: '/website_images/animals_birds/velcro.JPG',
            src: '/website_images/animals_birds/thumbnails/velcro.jpg',
            alt: 'meow again',
            text: 'Velcro the cat takes a luxurious nap in a ray of sunshine. Klosterneuburg, Austria.'
        },
        {
            full: '/website_images/animals_birds/bear-4.jpg',
            src: '/website_images/animals_birds/thumbnails/bear-4.jpg',
            alt: 'bear',
            text: 'A brown bear walks along the beach in search of a snack in Chinitna Bay, Alaska, USA.'
        },

    ];

    const nature_photos = [
        {
            full: '/website_images/nature_insects/fish_hanging_2.png',
            src: '/website_images/nature_insects/thumbnails/fish_hanging_2.jpg',
            alt: 'fish hanging',
            text: 'A rack of cod hanging to dry in Lofoten, Norway.'
        },
        {
            full: '/website_images/nature_insects/sunset_ocean.JPG',
            src: '/website_images/nature_insects/thumbnails/sunset_ocean.jpg',
            alt: 'sunset on the ocean',
            text: 'Sunset over the ocean in Lofoten, Norway.'
        },
        {
            full: '/website_images/nature_insects/small_cactus.PNG',
            src: '/website_images/nature_insects/thumbnails/small_cactus.jpg',
            alt: 'desert plant',
            text: 'A tiny plant peeks up through the sand in White Sands, New Mexico, USA.'
        },
        {
            full: '/website_images/nature_insects/apples.JPG',
            src: '/website_images/nature_insects/thumbnails/apples.jpg',
            alt: 'apples',
            text: 'Apples hanging from a tree in Flåm, Norway.'
        },
        {
            full: '/website_images/nature_insects/bee.JPG',
            src: '/website_images/nature_insects/thumbnails/bee.jpg',
            alt: 'bee',
            text: 'A bee gathers pollen from a dandelion in Klosterneuburg, Austria.'
        },
        {
            full: '/website_images/nature_insects/cactus.JPG',
            src: '/website_images/nature_insects/thumbnails/cactus.jpg',
            alt: 'cactus',
            text: 'A beautiful cactus plant in Las Cruces, New Mexico.'
        },
        {
            full: '/website_images/nature_insects/grasshopper.JPG',
            src: '/website_images/nature_insects/thumbnails/grasshopper.jpg',
            alt: 'grasshopper',
            text: 'A grasshopper thinks about life in Las Cruces, New Mexico, USA.'
        },
        {
            full: '/website_images/nature_insects/mushroom.JPG',
            src: '/website_images/nature_insects/thumbnails/mushroom.jpg',
            alt: 'mushroom',
            text: 'A toxic mushroom peeks invitingly from its hiding spot. Near Geilo, Norway.'
        },
        {
            full: '/website_images/nature_insects/rorbu.PNG',
            src: '/website_images/nature_insects/thumbnails/rorbu.jpg',
            alt: 'rorbu',
            text: 'A traditional seaside hut in Lofoten, Norway.'
        },

    ];

    const commercial_photos = [
        {
            full: '/website_images/indoor_commercial/vase.PNG',
            src: '/website_images/indoor_commercial/thumbnails/vase.jpg',
            alt: 'vase',
            text: 'Photo of a minimalist modern flower vase and candle.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/candle.JPG',
            src: '/website_images/indoor_commercial/thumbnails/candle.jpg',
            alt: 'candle',
            text: 'A candle drips in dramatic lighting.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/cosy.JPG',
            src: '/website_images/indoor_commercial/thumbnails/cosy.jpg',
            alt: 'cosy',
            text: 'A cosy candle with a fluffy background.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/xmas.JPG',
            src: '/website_images/indoor_commercial/thumbnails/xmas.jpg',
            alt: 'christmas',
            text: 'Window light shines through a Christmas tree, contrasting with the trees outside of the window.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/splash.JPG',
            src: '/website_images/indoor_commercial/thumbnails/splash.jpg',
            alt: 'fruit splash',
            text: 'Fruit splashes into water.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/leaf.JPG',
            src: '/website_images/indoor_commercial/thumbnails/leaf.jpg',
            alt: 'plant closeup',
            text: 'A closeup of a leaf with a smooth bokeh background.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/candle_petals.JPG',
            src: '/website_images/indoor_commercial/thumbnails/candle_petals.jpg',
            alt: 'candle with petals',
            text: 'A product shot of a coffee-scented homemade candle.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/leaves_crisscross.jpg',
            src: '/website_images/indoor_commercial/thumbnails/leaves_crisscross.jpg',
            alt: 'palm leaves',
            text: 'Light plays through criss-crossed palm leaves, forming interesting shadows below.',
            classname: 'gallery-photo'
        },
        {
            full: '/website_images/indoor_commercial/horse_figurine.jpg',
            src: '/website_images/indoor_commercial/thumbnails/horse_figurine.jpg',
            alt: 'horse figure',
            text: 'A Japanese kinetic sculpture of a horseback rider casts an interesting shadow in the long afternoon sun.',
            classname: 'gallery-photo-bl'
        },


    ];

    const food_photos = [
        {
            full: '/website_images/food/champagne.PNG',
            src: '/website_images/food/thumbnails/champagne.jpg',
            alt: 'cheers!',
            text: 'Preparing to toast in a new year.'
        },
        {
            full: '/website_images/food/bun.JPG',
            src: '/website_images/food/thumbnails/bun.jpg',
            alt: 'cardamom',
            text: 'A delicious cardamom bun.'
        },
        {
            full: '/website_images/food/steak.JPG',
            src: '/website_images/food/thumbnails/steak.jpg',
            alt: 'steak',
            text: 'A seasoned steak is ready for the grill.'
        },
        {
            full: '/website_images/food/ferrero.JPG',
            src: '/website_images/food/thumbnails/ferrero.jpg',
            alt: 'chocolates',
            text: 'Ferrero Rocher chocolates against a smooth bokeh backround with celebratory ribbons.'
        },
        {
            full: '/website_images/food/fancy.PNG',
            src: '/website_images/food/thumbnails/fancy.jpg',
            alt: 'entremet',
            text: 'A delicious entremet from Pascal.'
        },

        {
            full: '/website_images/food/cocoa.JPG',
            src: '/website_images/food/thumbnails/cocoa.jpg',
            alt: 'cocoa',
            text: 'Hot cocoa topped with whipped cream and chocolate stars.'
        },
        {
            full: '/website_images/food/wine_swirl-2.jpg',
            src: '/website_images/food/thumbnails/wine_swirl-2.jpg',
            alt: 'red wine',
            text: 'Red wine swirls invitingly in a glass against a smooth bokeh background.'
        },
        {
            full: '/website_images/food/coffee-4.jpg',
            src: '/website_images/food/thumbnails/coffee-4.jpg',
            alt: 'coffee drip',
            text: 'Coffee drips from a machine into the waiting coffee cup beneath.'
        },
        {
            full: '/website_images/food/spread_2.JPG',
            src: '/website_images/food/thumbnails/spread_2.jpg',
            alt: 'charcuterie',
            text: 'A spread of various charcuterie is pictured from above.'
        },
    ];

    return (
        <>
            {/* Block of text above the gallery */}

            < div  >
                <h1 className='h1_photo_gallery'>photo gallery</h1>
                <div className='gallerydescript'> subject-centric · playful · in-the-moment</div>
                <div>
                    <br></br>
                </div>
                <p>
                    some of my published photos:
                </p>
            </div >
            {/* PUBLISHED PHOTOS */}
            <div className="gallery-container-links">

                {published_photos.map((photo, index) => (
                    <div key={index} className='photo'>
                        <img

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
                        className={photo.classname}
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
            {/* Display the selected full-size photo */}

            {selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />}

        </>
    );
};

export default Gallery;
