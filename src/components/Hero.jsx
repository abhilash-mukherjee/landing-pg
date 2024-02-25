import React from 'react';
export const Hero = () => {
    return (
        <>
            <div class="container lg-auto p-6 flex flex-col	items-center	self-center	flex-1 justify-center max-w-4xl	space-y-5 ">
                <h1 className='text-3xl sm:text-3xl md:text-2xl lg:text-5xl xl:text-5xl text-white text-center'>Intuitive User Assistance For XR Apps</h1>
                <h2 className='text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl text-white text-center	'>We help XR Apps to improve their user onboarding, activation, adoption and retention with the right in-app nudges. No Coding Required.</h2>
                <button
                    className="bg-transparent hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-full border-solid border-slate-300 border-2 transition-transform duration-100"
                    style={{ transform: 'scale(1.0)' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    onClick={() => window.location.href = 'mailto:contact@penguinlabs.in'}
                >
                    Get in Touch!
                </button>


            </div></>
    )
}