import './Skills.css';

export default function Skills() {
    return (
        <div id='skills'>
            <h2 id='skillsheading'>Skills</h2>
            <div className='skill-card'>
                <div className='skill-item'>
                    <h1 className='skill'>HTML</h1>
                    <p>Markup language for creating web pages.</p>
                </div>
                <div className='skill-item'>
                    <h1 className='skill'>CSS</h1>
                    <p>Styling language for beautiful UI.</p>
                </div>
                <div className='skill-item'>
                    <h1 className='skill'>JAVASCRIPT</h1>
                    <p>Interactive and dynamic client-side logic.</p>
                </div>
                <div className='skill-item'>
                    <h1 className='skill'>NODE & EXPRESS JS</h1>
                    <p>Backend runtime and framework for APIs.</p>
                </div>
                <div className='skill-item'>
                    <h1 className='skill'>REACTJS</h1>
                    <p>Component-based frontend framework.</p>
                </div>
                <div className='skill-item'>
                    <h1 className='skill'>MYSQL</h1>
                    <p>Relational database for structured data.</p>
                </div>
            </div>
        </div>
    );
}
