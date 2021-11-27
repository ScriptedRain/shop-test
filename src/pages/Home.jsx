import { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'

const Home = () => {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'testUsers')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data, id: doc.id })))
      console.log(users)
    }
    getUsers()
  }, [])

  return (
    <div>
      <Navbar />
      {users.map((users) => {
        return (
          <div>
            <h1>Name: {users.name}</h1>
            <h1>id: {users.id}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Home
