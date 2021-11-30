import { useState, useEffect } from 'react'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'

// eslint-disable-next-line
const Card = ({ name, desc, tags, price, img }) => {
  // eslint-disable-next-line
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
    <div className=''>
      <a exact href='/'>
        <img
          class='block h-64 rounded-lg shadow-lg'
          src={
            img
              ? img
              : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80'
          }
          alt='NIKE AIR'
        ></img>
      </a>
      <div class='flex items-center justify-between mt-3'>
        <div>
          <a href='/' class='font-medium'>
            {name ? name : '$name'}
          </a>
          <a class='flex items-center' href='/'>
            <span class='text-xs font-medium text-gray-600'>by</span>
            <span class='text-xs font-medium ml-1 text-indigo-500'>
              {tags ? tags : '$tags'}
            </span>
          </a>
        </div>
        {price ? (
          <span class='flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded'>
            {price ? price : '$price'}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default Card
