import React from 'react';
import ui from '../icons/ui.png';
import website from '../icons/website.png';
import developer from '../icons/developer.png';

export default function Services() {
    return (
        <>
            <hr />
            <section id="services-section">
                <h3 className="text-5xl font-bold text-center overflow-hidden">Services</h3>
                <p className="text-lg font-normal text-center mb-20">What i offer</p>

                <div className="md:flex md:flex-row sm:gap-16 md:gap-5 md:mx-5 lg:text-center lg:mx-20 xl:mx-60 hjustify-center"
                    id="services-div">

                    <div id="service-1">
                        <img src={ui} alt="dashboard-layout" />
                        <h4 className="font-bold text-2xl text-center">UI/UX Design</h4>
                        <p className="lg:text-xl text-center">I specialize in crafting captivating ui/ux designs that engage users
                            on digital platforms using photoshop and Adobe xd as my creative arsenal</p>
                    </div>

                    <div id="service-2">
                        <img src={website} alt="web-design--v2" />
                        <h4 className="font-bold text-2xl text-center">Web App</h4>
                        <p className="lg:text-xl text-center">
                            I am developing web apps with HTML, CSS, and JavaScript, while harnessing the power of React.js and
                            with other tools for dynamic and interactive user experiences.</p>
                    </div>

                    <div id="service-3">
                        <img src={developer} alt="source-code" />
                        <h4 className="font-bold text-2xl text-center">Backend</h4>
                        <p className="lg:text-xl text-center">
                            I specialize in crafting Python-based backend code seamlessly integrated with SQL databases,
                            ensuring robust and efficient data management for your applications.</p>
                    </div>
                </div>

            </section>
        </>
    )
}
