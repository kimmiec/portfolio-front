import resPic from '../imgs/resume_image_2.png'
import resume from '../imgs/KChan_Resume.pdf'

function Resume(props) {
    return (
        <div class="bkg">
            <div className="resImg">
                <img src={resPic} alt="resume" />
            </div>

            <div className="resBtn">
                <a href={resume} download>
                    <button class='resbtn'>Download Resume</button>
                </a>
            </div>
        
        </div>
    )
}

export default Resume;