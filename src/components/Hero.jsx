import React from 'react';
export const Hero = () => {
    return (
        <>
            <div class="container lg-auto p-6 flex flex-col	items-center	self-center	flex-1 justify-center max-w-4xl	gap-y-5 xl:gap-y-8 lg:gap-y-6 ">
                <div className='flex flex-col gap-y-2 md:gap-y-2 sm:gap-y-1 lg:gap-y-5'>
                    <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white text-center font-semibold'>Intuitive User Assistance</h1>
                    <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white text-center font-semibold'>For XR Apps</h1>
                </div>
                <h2 className='text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl text-white text-center'>We help XR Apps to improve their user onboarding, activation, adoption, and retention with the right in-app nudges. No Coding Required.</h2>

                <div className='py-3'>
                <button
                    className="bg-transparent text-white font-normal py-2 px-8 rounded-full border-solid border-slate-300 border transition-transform duration-100 text-base"
                    style={{ transform: 'scale(1.0)' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    onClick={() => window.location.href = 'mailto:contact@penguinlabs.in'}
                >
                    Get in Touch!
                </button>
                </div>


            </div></>
    )
}