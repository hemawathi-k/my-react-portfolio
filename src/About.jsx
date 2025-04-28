import './About.css';
import cartoon from './assets/cartoon.png'; // import cartoon image
import resume from './assets/Resume Updated.pdf'; // import resume pdf

export default function About() {
    return (
        <>
         <div className="about-layout" id='about'>
            <div className='img-div'>
              <img src={cartoon} alt="Cartoon" />  {/* Use imported cartoon */}
            </div>
            <div className='right-content'>
                <h1 id='h1'>About Me</h1>
                <p>
                I'm Hemawathi Karthikeyan, a B.E. Computer Science graduate with a strong interest in Full Stack React Development. I'm passionate about building dynamic, responsive web applications and constantly learning new technologies.
                </p>
                <a href={resume} download className="download-btn1">Resume</a> {/* Use imported resume */}
            </div>
         </div>
        </>
    )
}
