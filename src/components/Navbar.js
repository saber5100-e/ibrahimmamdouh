function Navbar({lang, setLang}){
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#welcome-section">Ibrahim Mamdouh's Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <button className="nav-btn nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                {lang}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><button onClick={() => setLang("EN")} className="dropdown-item">{lang === "EN" ? "EN ✓" : 'EN'}</button></li>
                                <li><button onClick={() => setLang("AR")} className="dropdown-item">{lang === "AR" ? "AR ✓": "AR"}</button></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about-me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#my-projects">My Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#hire-me">Hire Me</a>
                        </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar