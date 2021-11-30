import { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'
// import Card from '../Components/Card'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

const Home = () => {
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
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
