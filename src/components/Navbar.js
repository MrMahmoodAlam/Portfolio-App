
import { useRef, useEffect } from 'react';
import React from 'react'


export default function Navbar() {

    useRef(null);
    useEffect(() => {

        let open_menu = document.getElementById("menu-div");
        let close_menu = document.getElementById("close-div");
        let navlist = document.getElementById("navlist")

        open_menu.addEventListener('click', () => {
            open_menu.removeAttribute("id");
            open_menu.setAttribute("class", "closing-menu")

            close_menu.removeAttribute("id");
            close_menu.setAttribute("id", "show-close");

            navlist.removeAttribute("id");
            navlist.setAttribute("id", "nav-div-2")
        });

        close_menu.addEventListener('click', () => {
            close_menu.removeAttribute("id");
            close_menu.setAttribute("id", "close-div");

            open_menu.removeAttribute("class");
            open_menu.setAttribute("id", "menu-div")

            navlist.removeAttribute("id");
            navlist.setAttribute("id", "navlist")
        });



        // Navabar Mobile Onclick hide started
        let skills = document.getElementById("skills-list");
        let services = document.getElementById("services-list");
        let project = document.getElementById("project-list");
        let contact = document.getElementById("contact-list");

        if (window.innerWidth <= 768) {
            skills.addEventListener("click", () => {
                navlist.removeAttribute("id");
                navlist.setAttribute("id", "navlist")

                close_menu.removeAttribute("id");
                close_menu.setAttribute("id", "close-div");

                open_menu.removeAttribute("class");
                open_menu.setAttribute("id", "menu-div")
            })
            services.addEventListener("click", () => {
                navlist.removeAttribute("id");
                navlist.setAttribute("id", "navlist")

                close_menu.removeAttribute("id");
                close_menu.setAttribute("id", "close-div");

                open_menu.removeAttribute("class");
                open_menu.setAttribute("id", "menu-div")
            })
            project.addEventListener("click", () => {
                navlist.removeAttribute("id");
                navlist.setAttribute("id", "navlist")

                close_menu.removeAttribute("id");
                close_menu.setAttribute("id", "close-div");

                open_menu.removeAttribute("class");
                open_menu.setAttribute("id", "menu-div")
            })
            contact.addEventListener("click", () => {
                navlist.removeAttribute("id");
                navlist.setAttribute("id", "navlist")

                close_menu.removeAttribute("id");
                close_menu.setAttribute("id", "close-div");

                open_menu.removeAttribute("class");
                open_menu.setAttribute("id", "menu-div")
            })
        }
    }, []);




    return (
        <>
            <div>
                <section id="nav-main-div" className="d-inline-block flex flex-row justify-around mt-5">
                    <div><a href="/"
                        className="lg:text-2xl font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">MAHMOOD ALAM
                    </a>
                    </div>

                    <div id="menu-div">
                        <i className='ri-menu-2-line'></i>
                    </div>

                    <div id="close-div">
                        <i className="ri-close-circle-line"></i>
                    </div>


                    <div id='navlist' className="overflow-hidden">
                        <a className="px-4 py-2 mt-2 lg:text-xl font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="" id="home-list">Home</a>
                        <a className="px-4 py-2 mt-2 lg:text-xl font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#skills-section" id="skills-list" >Skills</a>
                        <a className="px-4 py-2 mt-2 lg:text-xl font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#services-section" id="services-list">Services</a>
                        <a className="px-4 py-2 mt-2 lg:text-xl font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#project-section" id="project-list">Projects</a>
                        <a className="px-4 py-2 mt-2 lg:text-xl font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#contact-section" id="contact-list">Contact</a>
                    </div>


                </section>
            </div>

        </>
    )
}
