import React from 'react'

import html from '../icons/skills/html.png'
import css from '../icons/skills/css.png'
import javascript from '../icons/skills/javascript.png'
import react from '../icons/skills/react.png'
import tailwind from '../icons/skills/tailwind.png'
import bootstrap from '../icons/skills/bootstrap.png'
import git from '../icons/skills/git.png'

import xd from '../icons/skills/xd.png'
import photoshop from '../icons/skills/photoshop.png'

import sql from '../icons/skills/sql.png'
import python from '../icons/skills/python.png'
import MySQL from '../icons/skills/MySQL.png'

export default function Skills() {
    return (
        <>
            <hr />
            <section id="skills-section">
                <h3 className="text-5xl font-bold text-center overflow-hidden">Skills</h3>
                <p className="text-lg font-normal text-center" id="skills-inner">My amazing skills</p>

                <div className="sm:flex flex-row justify-evenly content-center sm:mt-16">
                    <div>
                        <p className="mb-3 text-center md:text-xl lg:text-2xl" id="frontend-p frontend-h">
                            <i className="ri-braces-fill mr-2"></i>Frontend Developer
                        </p>
                        
                        <div id="skill-div">

                            <div>
                                <img src={html} className="p-1 bg-slate-200" alt='error'/>
                                <h5 className="font-medium text-center">HTML</h5>
                                <p>Intermediate</p>
                            </div>
                            <div>
                                <img src={css} className="p-1 bg-slate-200" alt='error'/>
                                <h5 className="font-medium text-center">CSS</h5>
                                <p>Intermediate</p>
                            </div>
                            <div>
                                <img src={javascript} className="p-1 bg-slate-200" alt='error'/>
                                <h5 className="font-medium text-center">JavaScript</h5>
                                <p>Intermediate</p>
                            </div>
                            <div>
                                <img src={react} className="p-1 bg-slate-200" alt='error'/>
                                <h5 className="font-medium text-center">React</h5>
                                <p>Intermediate</p>
                            </div>
                            <div>
                                <img src={tailwind} className="p-1 bg-slate-200" alt='error'/>
                                <h5 className="font-medium text-center">Tailwind CSS</h5>
                                <p>Intermediate</p>
                            </div>
                            <div>
                                <img src={bootstrap} className="p-1 bg-slate-200" alt='error'/>
                                <h5 className="font-medium text-center">Bootstrap</h5>
                                <p>Intermediate</p>
                            </div>
                            <div>
                                <img src={git} className="p-1 bg-slate-200" alt='error'/>
                                <h5 className="font-medium text-center">Git</h5>
                                <p>Intermediate</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="mb-3 text-center md:text-xl lg:text-2xl" id="web-design-p"><i
                            className="ri-quill-pen-line mr-2"></i>Web Designer</p>
                        <div id="web-design-div">
                            <div>
                                <img src={xd} className="p-1 bg-slate-200 inline-block" alt='error'/>
                                <h5 className="font-medium text-center">Photoshop</h5>
                                <p>Intermediate</p>
                            </div>
                            <div>
                                <img src={photoshop} className="p-1 bg-slate-200 inline-block" alt='error'/>
                                    <h5 className="font-medium text-center">Adobe XD</h5>
                                    <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h4 className="sm:mt-14 mb-3 md:text-xl lg:text-2xl" id="backend-p"><i className="ri-database-line mr-2"></i>Backend
                        Developer</h4>
                    <div id="backend-div">
                        <div>
                            <img src={sql} className="p-1 bg-slate-200 inline-block" alt='error'/>
                            <h5 className="font-medium">SQL</h5>
                            <p>Intermediate</p>
                        </div>
                        <div>
                            <img src={python} className="p-1 bg-slate-200 inline-block" alt='error'/>
                            <h5 className="font-medium">Python</h5>
                            <p>Intermediate</p>
                        </div>
                        <div>
                            <img src={MySQL} className="p-1 bg-slate-200 inline-block" alt='error'/>
                            <h5 className="font-medium">MySQL</h5>
                            <p>Intermediate</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
