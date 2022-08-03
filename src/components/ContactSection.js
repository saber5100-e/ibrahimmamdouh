import { useState } from "react"
import axios from "axios"

function ContactSection({lang}){
    const [info] = useState({
        titleAR: "تواصل معي:",
        titleEN: 'Hire Me:',
        nameEN: 'Name:',
        nameAR: "الاسم:",
        emailEN: 'Email:',
        emailAR: "الحساب الاليكتروني:",
        messageEN: 'Message :',
        messageAR: "الرسالة:",
        btnEN: 'send',
        btnAR: 'ارسل'
    })

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const [err, setErr] = useState(false)
    const [success, setSuccess] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        axios.post('https://desolate-wildwood-56049.herokuapp.com/send-email', {email, name, message})
            .then(() => {
                setEmail('')
                setName('')
                setMessage('')
                setSuccess(true)
            })
            .catch(() => setErr(true))
    }

    return (
        <section id="hire-me" className="contact-section">
            <div className="container">

                <form onSubmit={e => handleSubmit(e)} className="content-form">
                    <h2 className="text-center">{info['title' + lang]}</h2>

                    <div className="row justify-content-center">
                        <div className="col-4">
                            <label htmlFor="name">{info['name' + lang]} </label>
                            <input value={name} onChange={e => setName(e.target.value)} id="name" type="text" className="form-control" placeholder="Name" aria-label="Name"/>
                        </div>

                        <div className="col-4">
                            <label htmlFor="email">{info['email' + lang]} </label>
                            <input value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" className="form-control" placeholder="Email" aria-label="Email"/>
                        </div>

                        <div className="col-8">
                            <label htmlFor="message">{info['message' + lang]} </label>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" rows="6" className="form-control"></textarea>
                        </div>

                        <div className="submit row justify-content-center">
                            <button className="col-3 col-md-1 btn btn-primary" type="sumbit">{info['btn' + lang]}</button>
                        </div>

                        {success ? <div className="col-12 message mb-3"><span>email sent successfully</span> <span className="message-close" onClick={() => setSuccess(false)}>X</span></div> : ''}
                        {err ? <div className="col-12 message message-error mb-3"><span>couldn't send email please try again</span> <span className="message-close" onClick={() => setErr(false)}>X</span></div> : ''}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactSection