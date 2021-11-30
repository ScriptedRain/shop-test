import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
      <header class='bg-white dark:bg-gray-800'>
        <div class='container px-6 py-16 mx-auto'>
          <div class='items-center lg:flex'>
            <div class='w-full lg:w-1/2'>
              <div class='lg:max-w-lg'>
                <h1 class='text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl'>
                  Best Place To Choose Your Clothes
                </h1>
                <p class='mt-2 text-gray-600 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>
                <Link to='/shop'>
                  <button class='px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-700 hover:scale-105 focus:ring-indigo-300 focus:ring-opacity-80'>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div class='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
              <img
                class='w-full h-full lg:max-w-2xl'
                src='https://firebasestorage.googleapis.com/v0/b/shop-app-26778.appspot.com/o/Images%2Fundraw_web_shopping_re_owap.svg?alt=media&token=64ae3ce7-a768-412f-99b2-1100439eb71f'
                alt='Catalogue-pana.svg'
              ></img>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
