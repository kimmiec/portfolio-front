import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'


function Footer(props) {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        // border: '2px dashed palevioletred',
        padding: '8px',
        width: '90%',
        margin: '20px auto',
        fontSize: '20px',
    };

    const border = {
        borderTop: '1px ridge cadetblue',
        width: '50%',
        margin: '50px auto'
    }

    return (
        <header style={border}>
                <h3>Contact Me</h3>
            <nav style={navStyle}>
                <a href="mailto:kimberlyhchan@gmail.com"><FiMail /></a>
                <a href="https://github.com/kimmiec" target="_blank"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/kimberly-h-chan/" target="_blank"><FaLinkedinIn /></a>
            </nav>
                <h5>© Kimberly Chan 2021</h5>
        </header>
    );
}

export default Footer;