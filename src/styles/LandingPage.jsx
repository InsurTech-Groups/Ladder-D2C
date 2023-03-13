import React from 'react';
import LadderForm from '../apis/LadderForm';

const LandingPage = () => {
  return (

    <div className='bg-dark-purple'>
    <section className="relative h-full py-36 grid grid-cols-2 w-5/6 mx-auto  content-center">
      <div className="relative z-20 overflow-hidden pt-36 pb-36">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap xl:items-center -m-8">

    <div className="px-4 sm:px-8  xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Get A </span>
              <span className="block font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Life Insurance {' '}
              </span>
              Quote In Seconds
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
             With no medical exam, you can get quoted instanly with only a few questions to get coverage up to $3M. With pricing starting at $5/mo, you can start today!
            </p>
          </div>
    </div>
  </div>
    </div>
      
      <div>
      <div className="relative w-full">
              <div className="w-full xl:flex-1">
                <LadderForm/>
              </div>
            </div>
      </div>
      </section>
      </div>
      )
}

export default LandingPage