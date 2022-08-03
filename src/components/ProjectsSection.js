import { useState } from "react";
import Project from "./Project";

function ProjectsSection({lang, setModalDisplay, setProjectModal}){
    const [projects] = useState([
        {image: 'screenshot-1.png', nameEN: 'Shop Website', description: "this is a prototype of a bakery site i made using nextJS, in this site users can authenticate using thier google accounts and then access their carts and order stuff from the site, while this website accepts payments using stripe its just for testing purposes and i do recieve any revenue from it, also coustmers don't recieve anything, all items in this shop can be updated by me using Contentful", nameAR: "موقع تسوق", link: 'https://next-shop-demo.vercel.app'},
        {image: 'screenshot-2.png', nameEN: 'Blog Website', description: "this is a blog website i made which i can update any post posted on it using contentful, it also has authentication with google and comments, made it using NextJS", nameAR: "مدونة الكترونية", link: 'https://nextjs-demo-blog-pi.vercel.app'},
        {image: 'screenshot-3.png', nameEN: 'Chat website', description: "a chat app i made using socket.io, it allows users to have conversations in real time, in it users can create rooms and join other rooms, all users in theses rooms recieve the messages in real time, made it using React socket.io mongodb and express", nameAR: "موقع للمحادثات", link: 'https://polar-inlet-73879.herokuapp.com'},
        {image: 'screenshot-4.png', nameEN: 'Todo App', description: "a todo app with authentication users can create read update and delete todos, users also can login from any device and access their lists, made with reactjs mongodb and express, authentication made with JWT", nameAR: 'Todo App', link: 'https://sheltered-scrubland-09701.herokuapp.com/sign-in'}
    ])

    const [title] = useState({
        titleAR: 'مشاريعي :',
        titleEN: 'My Projects:'
    })

    return (
        <section id="my-projects">
            <div className="container projects-section">
                <h2 className="text-center">{title['title' + lang]}</h2>

                <div className="row justify-content-center">
                    {projects.map((project, i) => <Project key={i} project={project} setProjectModal={setProjectModal} name={project["name" + lang]} screenshot={project.image} lang={lang} setModalDisplay={setModalDisplay}/>)}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection