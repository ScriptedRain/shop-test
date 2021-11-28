import { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'
import Card from '../Components/Card'
const Home = () => {
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
      {users.map((users) => {
        return (
          <div>
            <Card
              name={users.name}
              desc={users.id}
              img={
                'https://www.topgear.com/sites/default/files/cars-car/image/2020/07/dsc09285.jpg'
              }
            />
          </div>
        )
      })}
    </div>
  )
}

export default Home
