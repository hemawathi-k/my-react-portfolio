import './About.css'
export default function About(){
    return(
        <>
         <div className="about-layout" id='about'>
            <div className='img-div'>
              <img src="./assets/cartoon.png"/>
            </div>
            <div className='right-content'>
                <h1 id='h1'>About Me</h1>
                <p>
                I'm Hemawathi Karthikeyan, a B.E. Computer Science graduate with a strong interest in Full Stack React Development. I'm passionate about building dynamic, responsive web applications and constantly learning new technologies.
                </p>
                <a href="./assets/Resume Updated.pdf" download class="download-btn1">Resume</a>
            </div>
         </div>
        </>
    )
} 