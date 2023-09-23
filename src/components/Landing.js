import React from 'react'
import profile_photo from '../images/profile2.png'
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'

export default function Landing() {

    let linkedin_redirect = () => {
        window.open("https://www.linkedin.com/in/mahmoodalam000")
    }
    let github_redirect = () => {
        window.open("https://github.com/MrMahmoodAlam")
    }


    return (
        <>
            <section className="landing-layout" >

                <div className="md:mt-32 mb-16 overflow-hidden" id="landing-head-div">
                    <h1 className="font-serif md:text-4xl lg:text-6xl text-center overflow-hidden" >Hi, I'm Mahmood Alam <br />Full Stack Developer<br /> Based In India</h1>
                </div>

                <div>
                    <section className="layout">
                        <div id='left'>
                            <div className="mb-10">
                                <h3 className="mb-1 text-gray-500 lg:text-2xl font-medium">BIOGRAPHY</h3>
                                <p className="font-serif md:text-lg">Hello ! I'm Mahmood Alam, a versatile full stack developer.
                                    With a passion for building seamless user experiences. I'm on a mission to bring digital
                                    visions to life.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="mb-1 text-gray-500 lg:text-2xl font-medium">CONTACT</h3>
                                <p className="font-serif md:text-lg">Jharkhand, India</p>
                                <p className="font-serif md:text-xl">mahmoodalamjh@gmail.com</p>
                            </div>
                            <div id='left-last'>
                                <h3 className="mb-1 text-gray-500 lg:text-2xl font-medium">SERVICES</h3>
                                <p className="font-serif md:text-xl">UI/UX Design</p>
                                <p className="font-serif md:text-xl">Frontend Developer</p>
                                <p className="font-serif md:text-xl">Backend Developer</p>
                            </div>
                        </div>

                        <div id="profile-div">
                            <img src={profile_photo} id="profile-image" alt='error' />
                        </div>

                        <div id="landing-right" >
                            <div className="text-right">
                                <div className="mb-14" id="experience">
                                    <h3 className="mb-1 text-gray-500 lg:text-2xl font-medium">YEAR OF EXPERIENCE</h3>
                                    <p className="md:text-5xl font-serif overflow-hidden">01+</p>
                                </div>
                                <div className="mb-14" id="complete-project">
                                    <h3 className="mb-1 text-gray-500 lg:text-2xl font-medium">COMPLETED PROJECT</h3>
                                    <p className="md:text-5xl font-serif overflow-hidden">03+</p>
                                </div>
                                <div id='last-right'>
                                    <h3 className="mb-1 text-gray-500 lg:text-2xl font-medium">COMPANIES WORKED</h3>
                                    <p className="md:text-5xl font-serif overflow-hidden">00+</p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

                <div className="text-center mt-10" id="social-icons">
                    <img src={linkedin} alt="error" width="25px"
                        className="inline-block mr-7 hover:cursor-pointer" id="linkedin-icon" onClick={linkedin_redirect} />
                    <img src={github} alt="error" width="25px" className="inline-block mr-7 hover:cursor-pointer" id="github-icon" onClick={github_redirect} />
                </div>

            </section>
        </>
    )
}
