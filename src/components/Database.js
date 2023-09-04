import React from 'react'

import database_image from '../images/DatabaseImage.png'

export default function Database() {
    return (
        <>
            <p className='mt-4 ml-1 md:mt-7 md:ml-10 inline-block text-blue-600' id='go-to-home'>

                    <img width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className='inline-block'/>
                    Home
                </Link>
            </p>
            <div className="relative overflow-hidden bg-white">
                <div className="mt-6 md:pt-16">
                    <div className="relative flex flex-col md:flex-row mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        
                        <div className="sm:max-w-lg md:pt-16">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl overflow-hidden">Database design and details</h1>

                            <p className="mt-4 text-xl text-gray-500">The GitHub readme contains code and database details. To download the database image, use the provided download button.</p>

                            <a href="https://github.com/MrMahmoodAlam/SQL_Database" className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mr-4 mt-10">View code</a>

                            <a href={database_image} className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" download="databaseImage">Download design</a>
                        </div>
                        <div className='mt-5 md:mt-0'>
                            <img src={database_image} alt="error"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
