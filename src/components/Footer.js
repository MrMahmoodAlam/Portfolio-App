import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="text-center">
                <hr/>
                    <h3 className="text-5xl font-bold overflow-hidden">Mahmood Alam</h3>
                    <p className="mt-3 mb-10 lg:text-xl font-normal">Full Stack Developer</p>

                    <div>
                        <a href="https://mrmahmoodalam.github.io/Portfolio-App/" className="mr-10 hover:underline font-medium">Home</a>
                        <a href="#skills-section" className="mr-10 hover:underline font-medium">Skills</a>
                        <a href="#project-section" className="hover:underline font-medium">Projects</a>
                    </div>

                    <div className="mt-5 md:mb-10" id="footer-icon-div">
                        <a href="https://www.linkedin.com/in/mahmoodalam000">
                            <img width="20" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://github.com/MrMahmoodAlam">
                            <img width="20" src="https://img.icons8.com/ios/50/github--v1.png" alt="github--v1" />
                        </a>
                    </div>

                    <p className="mb-5 text-sm text-gray-600" id="footer-copyright-text">©️ Copyright MahmoodAlam. All rights reserved
                    </p>
            </footer>
        </>
    )
}
