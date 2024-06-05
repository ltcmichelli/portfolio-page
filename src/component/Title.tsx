import './Title.css';

function Title() {
    return (
        <div className="Parallax-cover">
        <h1 className='Headline'>Hello, I am Michelle Li</h1>
        <div className='LinkedIn'>
            <a href="https://www.linkedin.com/in/michelle-li-855990155/" target="_blank">
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
        <div className='GoTo'>
            <a href="#about_section">
                <i className="bi bi-arrow-down-circle-fill"></i>
            </a>
        </div>
        {/* https://portfolio-n4sn.vercel.app/#about */}
        </div>
  );
}

export default Title;