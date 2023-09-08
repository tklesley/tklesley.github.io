import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

import Sidebar from "../../components/sidebar/sidebar";
import "./contact.css";

export default function Contact({darkmode}) {

    const navigate = useNavigate();
    const captchaRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email:"",
        message:""
      });

    const [isDark, setIsDark] = useState();

    useEffect(()=>{
        darkmode ? setIsDark("dark") : setIsDark("light");
    }, [darkmode])

    const handleContact = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        emailjs.send("service_vjnnufg","template_tpu80jr",{
            from_name: formData.name,
            to_name: formData.email,
            message: formData.message,
            'g-recaptcha-response': token,
            }, "HgZ6wzP2soolLAo0C")
            .then((result) => {
                console.log(result.text);
                toast.success('Email sent successfully!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: isDark,
                    });
                    setTimeout(()=>{
                        navigate('/')
                        }, 2000);

            }, (error) => {
                console.log(error.text);
                console.log([error]);
                if (error.text === "reCAPTCHA: The g-recaptcha-response parameter not found") {
                    toast.error('ReCAPTCHA Failed', {
                        position: "top-center",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: isDark,
                        });
                }
            });
        
    }

    return (
        <div className="c-page">
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="c-title">Contact</div>
                <Sidebar />
                <div className="contact-section">
                    <form className='contact-form' onSubmit={handleContact}>
                        <h2>Send an Email</h2>
                        <div className='contact-input'>
                            <label htmlFor='contact-name'>Name</label>
                            <input type='text'  name='name' placeholder='Joan Doe' maxLength={50} onChange={(e)=>setFormData({...formData, name: e.target.value})} required />
                        </div>
                        <div className='contact-input'>
                            <label htmlFor='contact-email'>Email</label>
                            <input type='email'  name='contact-email' placeholder='contact@placeholder.com' maxLength={60} onChange={(e)=>setFormData({...formData, email: e.target.value})} required />
                        </div>
                        <div className='contact-input'>
                            <label htmlFor='contact-message'>Message</label>
                            <textarea type='text'  name='contact-message' placeholder='Max 650 Characters' maxLength={650} onChange={(e)=>setFormData({...formData, message: e.target.value})} required />
                            <p className="c-count">{formData.message.length}/650</p>
                        </div>
                        <ReCAPTCHA 
                            ref={captchaRef}
                            sitekey={"6Lc8ngooAAAAACVjvckjuKkQP5nDFbBi3AS4GidT"}
                            theme={isDark}
                        />
                        <button type='submit' className="c-submit">Send</button>
                    </form>
                    <p className="more-contact">I can also be emailed directly at <br/><u><a href="mailto:contact@tkl.fyi">contact@tkl.fyi</a></u></p>
                </div>
        </div>
    )
}