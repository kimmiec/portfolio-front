import { Link } from 'react-router-dom';

function Header(props) {
    // inline style for the new tag
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        border: '3px solid lightseagreen',
        padding: '8px',
        width: '90%',
        margin: 'auto',
        fontSize: '20px'
    };

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to='/'>
                    <div className="home">HOME</div>
                </Link>
                <Link to='/about'>
                    <div className="abt">ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div className="pro">PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;