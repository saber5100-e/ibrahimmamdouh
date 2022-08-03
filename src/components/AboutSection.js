import { useState } from "react"

function AboutSection({lang}){
    const [info] = useState({
        descriptionEN: "Hello my name is Ibrahim Mamdouh, and I'm a web developer who specialize in JS development, all of the projects showed on this website are made by me using JS and NODE including this website. i used stuff like Reactjs expressjs mongoose and more. all websites are also designed by me",
        descriptionAR: "اهلا اسمي ابراهيم ممدوح و انا مطور للويب و اتخصص في برمجة جافا سكريبت كل المشاريع الموجودة على هذا الموقع مبنية على الجافا سكريبت و نود بما في ذلك هذا الموقع استخدمت اشيائا اخرى مثل رياكت و اكسبريس و اشياء اخرى كثيرة ايضا كل المواقع هنا من تصميمي",
        aboutAR: "عني :",
        aboutEN: 'About Me:'
    })

    return (
        <section id="about-me">
            <div className="container">
                <div className="about-section row">
                    <div className="about-section-img col-12 col-md-4">
                        <img className="img-thumbnail" alt="about me" src='https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
                    </div>

                    <div className="about-section-info col-12 col-md-8">
                        <h2>{info['about' + lang]}</h2>
                        <p>{info['description' + lang]}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection