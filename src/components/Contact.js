import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

    const [style, new_style ] = useState ({
        display : "none"
    })
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        


        emailjs.sendForm('service_rpfspu3', 'template_key720o', form.current, 'p_Ki6I3Iqu1nErprE')
            .then((result) => {

                new_style({
                    display : "inline-block"
                })
                let name = document.getElementById("user-name");
                let email = document.getElementById("user-mail");
                let message = document.getElementById("user-text");
                name.value = ""
                email.value = ""
                message.value = ""

            }, (error) => {
                console.log(error.text);
            });
    };
    let back_submit = ()=>{
        new_style({
            display : "none"
        })
    }

    return (
        <>
            <section id="contact-section" className="text-center">
                <hr />
                <h3 className="text-5xl font-bold overflow-hidden">Contact Me</h3>
                <p className="text-lg font-normal">Get in touch</p>

                <div className="justify-center gap-10 mt-16" id="contact-div">

                    <div>
                        <p className="text-left mb-4 text-lg" id="contact-talk">Talk to me</p>

                        <div className="text-left">
                            <h5 className="font-sans text-base text-gray-600">Email</h5>
                            <p className="mb-10 font-serif">mahmoodalamjh@gmail.com</p>

                            <h5 className="font-sans text-base text-gray-600">Github</h5>
                            <p className="mb-10 font-serif">github.com/MrMahmoodAlam</p>

                            <h5 className="font-sans text-base text-gray-600">LinkedIn</h5>
                            <p className="font-serif">linkedin.com/MahmoodAlam000</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-left  mb-4 text-lg" id="contact-write">Write me your project</p>



                        <div>
                            <form ref={form} onSubmit={sendEmail}>

                                <fieldset className="text-left mb-3">
                                    <legend className="ml-5 px-2 font-medium">Name</legend>
                                    <input type="text" placeholder="Write your names" id="user-name" name='user_name'/>
                                </fieldset>

                                <fieldset className="text-left mb-3">
                                    <legend className="ml-5 px-2 font-medium">Email</legend>
                                    <input type="email" placeholder="Write your email" id="user-mail" name="user_email"/>
                                </fieldset>

                                <fieldset className="text-left">
                                    <legend className="ml-5 px-2 font-medium">Message</legend>
                                    <textarea placeholder="Write your projects" className="resize-none" id="user-text" name='message'
                                    ></textarea>
                                </fieldset>

                                <input type='submit' value="Send" className="text-left mt-4 hover:bg-blue-400 hover:cursor-pointer hover:text-white" id="submit-div" />

                            </form>

                        </div>

                    </div>

                </div>
            </section>




            {/* Submited Form Componets */}
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={style}>

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z" fill="rgba(0,245,3,1)"></path></svg>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Thank You !</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Your details has been successfully submitted. Thanks !</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={back_submit}>Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
