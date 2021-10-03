import React, { useContext } from 'react';


const About = () => {


    return (
        <div >
            <p className='container w-10/12'>
                Its an open online database of food meal recipes. There are many other sites online but none offered a nice API, so I wrote one myself. You don't yet... but there is a very simple JSON API that any developer can use to write a simple add-on. The vision is to be able to use Kodi in my kitchen/bar area to look up recipes with the remote. Hopefully a developer will jump on board and write the add-on.I basically want to bring Kodi into my kitchen. Recipe books are old school, there must be a better way!
                <br />

            </p>


            <ul className='list-disc ml-96 mt-4'>
                <li >High quality transparent PNG ingredients.</li>
                <li>Meal image uploads.</li>
                <li>Browse meals in sequence.</li>
                <li>Area and Categories.</li>
            </ul>



        </div>
    );
};

export default About;