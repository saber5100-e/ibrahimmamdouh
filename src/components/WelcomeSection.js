import { useState } from "react"

function WelcomeSection({lang}){
    const [info] = useState({
        titleAR: 'مرحبا بكم',
        titleEN: "Welcome To My Portfolio Site",
        btnEN: "Hire Me!",
        btnAR: "اعمل معي"
    })

    return (
        <section id="welcome-section" className="welcome-section">
            <img className="welcome-img" alt="developing" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"/>

            <div className="welcome-info">
                <h1>{info['title' + lang]}</h1>
                <a href="#hire-me" className="btn btn-primary">{info['btn' + lang]}</a>
            </div>
        </section>
    )
}

export default WelcomeSection