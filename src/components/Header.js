import { Link } from 'react-router-dom';

function Header(props) {
    // inline style for the new tag
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '8px',
        width: '100%',
        margin: 'auto',
        fontSize: '20px'
    };

    const border = {
        borderBottom: '1px ridge cadetblue',
        width: '90%',
        margin: '0 auto'
    }

    return (
        <header style={border}>
            <nav style={navStyle}>
            <h1 id="name">Kimberly Chan</h1>
                <Link to='/'>
                    <div className="home">
                        <h5>HOME</h5>
                    </div>
                </Link>
                <Link to='/resume'>
                    <div className="res">
                        <h5>RESUME</h5>
                    </div>
                </Link>
                <Link to='/projects'>
                    <div className="pro">
                        <h5>PROJECTS</h5>
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;