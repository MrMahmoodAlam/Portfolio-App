import React from 'react'
import { useRef, useEffect } from 'react';


import project1 from '../images/project-1.jpg';
import project2 from '../images/project-2.jpg';

export default function Project() {

    useRef(null);
    useEffect(() => {

        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
        });

        document.addEventListener('click', e => {
            cursor.classList.add("expand");
            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500);
        });

    })

    return (
        <>
            <div className='cursor'></div>
            <hr />
            <section id="project-section">
                <h3 className="text-5xl font-bold text-center overflow-hidden">Projects</h3>
                <p className="text-lg font-normal text-center">Most recent work</p>

                <div id="project-div" className="mt-16">
                    <div >
                        <img src={project1} alt='project error' />
                        <p className="mt-5">Web</p>
                        <h3 className="md:lg:text-xl font-semibold md:mb-4">Rockstar Website</h3>
                        <a href="https://mrmahmoodalam.github.io/Rockstar_Game/" className="text-blue-700 cursor-pointer">View demo <i
                            className="ri-arrow-right-s-fill"></i></a>
                    </div>
                    <div id="project-inner-div2">
                        <img src={project2} alt='project error' />
                        <p className="mt-5">Database</p>
                        <h3 className="md:lg:text-xl font-semibold md:mb-4">Designed Database</h3>
                        <a href="https://mrmahmoodalam.github.io/SQL_database/" className='text-blue-700 cursor-pointer'>View demo<i className="ri-arrow-right-s-fill"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}
