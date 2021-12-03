import { useState, useEffect } from 'react';

function Projects(props) {
    // hold info with state
    const [projects, setProjects] = useState(null);

    // function to make api call
    const getProjects = async () => {
        // make call and get response
        const response = await fetch(`${props.URL}projects`);
        // turn response to JS object
        const data = await response.json();
        // set projects state to data
        setProjects(data);
    }

    // make initial call for the data inside useEffect; no infinite loops
    useEffect(() => getProjects(), []);

    // define function that returns the JSX needed when we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div class="projects">
                <h1 className="proj">{project.name}</h1>
                <br />
                <img className="pic" src={project.image} />
                <br />
                <br />
                <div className="link">
                    <a href={project.git}>
                        <button>Github</button>
                    </a>
                    <a href={project.live}>
                        <button>live site</button>
                    </a>
                </div>
            </div>
        ))
    }
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;