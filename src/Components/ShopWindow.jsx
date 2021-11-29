import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'


const ShopWindow = ({ name, desc, price, img }) => {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'testUsers')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [usersCollectionRef])

  return (
    <div>
      <body class='flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800'>
        <h1 class='text-3xl'>Product Category Page Title</h1>
        <div class='flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6'>
          <span class='text-sm font-semibold'>1-16 of 148 Products</span>
          <button class='relative text-sm focus:outline-none group mt-4 sm:mt-0'>
            <div class='flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300'>
              <span class='font-medium'>Popular</span>
              <svg
                class='w-4 h-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
            <div class='absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex'>
              <a class='w-full px-4 py-2 text-left hover:bg-gray-200' href='#'>
                Popular
              </a>
              <a class='w-full px-4 py-2 text-left hover:bg-gray-200' href='#'>
                Featured
              </a>
              <a class='w-full px-4 py-2 text-left hover:bg-gray-200' href='#'>
                Newest
              </a>
              <a class='w-full px-4 py-2 text-left hover:bg-gray-200' href='#'>
                Lowest Price
              </a>
              <a class='w-full px-4 py-2 text-left hover:bg-gray-200' href='#'>
                Highest Price
              </a>
            </div>
          </button>
        </div>
        <div class='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {users.map((users) => {
            return (
              <div>
                <Card name={users.name} desc={users.id} img={users.image} />
              </div>
            )
          })}
          <Card name='Create New Card' img='https://seekicon.com/free-icon-download/plus-square_2.svg'/>
        </div>
      </body>
    </div>
  )
}

export default ShopWindow
