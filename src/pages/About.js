import { useState, useEffect } from 'react';

function About(props) {
    // create state to hold about data
    const [about, setAbout] = useState(null);

    // create function to make api call
    const getAbout = async () =>{
        // make api call and get response
        const response = await fetch(`${props.URL}about`);
        // ^cant put space between template literal and about bc temp literal takes it literally and so it already has the / included so it wouldnt need the space between temp literal and about or projects
        // turn response into javascript object
        const data = await response.json();
        // set the about state to the data
        setAbout(data);
    };

    // make initial call for the data inside a useEffect, so it only happens once a component loads
    useEffect(() => getAbout(), []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div class="body">
            <h3>Hello and Welcome!</h3>
            <img class="me" src={about.headshot} alt="Kimberly Chan" />
            <h4 class="bio">{about.bio}</h4>
        </div>
    )

    // if data arrives return the result of loaded, if not, an h1 that says loading... will display

    return about ? loaded() : <h1>Loading...</h1>
}

export default About;