function Modal({modalDisplay, setModalDisplay, projectModal, lang}){
    return (
        <div style={{display: modalDisplay}} className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{projectModal["name" + lang]}</h5>
                        <button onClick={() => setModalDisplay('none')} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img alt="screenshot" style={{width: '100%'}} src={'screenshots/' + projectModal.image}/>
                        <p>{projectModal['description' + lang]}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setModalDisplay('none')} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href={projectModal.link} rel="noreferrer" target="_blank" className="btn btn-primary">visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal