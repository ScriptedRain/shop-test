import Navbar from '../Components/Navbar'
import AlgoliaInstantSearch from '../Components/AlgoliaInstantSearch'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'testUsers')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    }
    getUsers()
  }, [])

  return (
    <div>
      <Navbar />
      <AlgoliaInstantSearch />
    </div>
  )
}

export default Home
