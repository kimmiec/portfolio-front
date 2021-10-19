function Footer(props) {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        border: '2px dashed palevioletred',
        padding: '8px',
        width: '90%',
        margin: '20px auto',
        fontSize: '15px',
    };

    return (
        <header>
            <nav style={navStyle}>
                <div>Made in 2021</div>
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
            </nav>
        </header>
    );
}

export default Footer;