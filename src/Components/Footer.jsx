import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer class='bg-white dark:bg-gray-800'>
        <div class='container px-6 py-8 mx-auto'>
          <div class='text-center'>
            <a
              href='/'
              class='text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
            >
              U Bay
            </a>

            <p class='max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400'>
              Rediscover yourself
            </p>

            <div class='flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center'>
              <Link>
                <button class='w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80'>
                  Get started
                </button>
              </Link>
            </div>
          </div>

          <hr class='my-10 dark:border-gray-500' />

          <div class='flex flex-col items-center sm:flex-row sm:justify-between'>
            <p class='text-sm text-gray-400'>
              © Copyright 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
