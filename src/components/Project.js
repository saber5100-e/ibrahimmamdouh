import { useState } from "react"

function Project({project,setProjectModal, name, screenshot, lang, setModalDisplay}){
    const [btn] = useState({
        AR: 'اقرا المزيد',
        EN: 'see more'
    })

    return (
        <div className="col-6 project">
            <div className="text-center">
                <div className='project-img'>
                    <img alt="project 1" className="img-fluid" src={`screenshots/${screenshot}`}/>
                    <h3>{name}</h3>
                </div>
                
                <div className="project-info">
                    <p>{project['description'].substring(0,140)}...</p>
                    <button onClick={() => { 
                        setModalDisplay('block')
                        setProjectModal(project)
                    }} className='btn btn-primary'>{btn[lang]}</button>
                </div>
            </div>
        </div>
    )
}

export default Project