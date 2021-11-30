import { Button1, Button2 } from './Buttons'
import { Link } from 'react-router-dom'
import { authentication } from '../Firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useState } from 'react/cjs/react.development'

const Navbar = ({ currentPageShop }) => {

  const [signedIn, setSignIn] = useState(false)

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
    .catch((err) => {
      'null'
    })
    setSignIn(true)
  }


  return (
    <div className=''>
      <div className='grid grid-cols-12 gap-4 pt-4 row-span-2 grid-rows-1 pb-2 bg-gray-800'>
        <div>
          <a href='/' className='flex-shrink-0 flex items-center'>
            <img
              src='https://img.icons8.com/color/48/000000/shooting-stars.png'
              alt='Shooting Stars'
              className=' transform scale-75 ml-4'
            />
            <h1 className='text-gray-200 font-mono font-extrabold antialiased text-2xl hidden lg:block h-8 w-auto ml-3 mb-1'>
              BKSA
            </h1>
          </a>
        </div>
        <div className='flex'>
          <div className='ml-8 mr-2'>
            <Link to='/shop'>
              <Button1 name='shop' />
            </Link>
          </div>
          <div>
            <Link to='/team'>
              {currentPageShop ? (
                <Button2 name='Team' />
              ) : (
                <Button1 name='Team' />
              )}
            </Link>
          </div>
        </div>
        <div className='col-start-10 col-span-2'>
          
          {
            signedIn === true 
            
            ? 
            
            <button
              type='button'
              onClick={signInWithGoogle}
              className='flex items-center justify-center w-full px-6 py-2.5 mr-2 ml-24 text-sm font-medium text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-400 focus:bg-blue-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed' disabled
            >
              <svg class='w-4 h-4 mx-2 fill-current' viewBox='0 0 24 24'>
                <path d='M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z'></path>
              </svg>

              <span class='hidden mx-2 sm:inline'>Signed in</span>
            </button>

            :

            <button
              type='button'
              onClick={signInWithGoogle}
              class='flex items-center justify-center w-full px-6 py-2.5 mr-2 ml-24 text-sm font-medium text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-400 focus:bg-blue-400 focus:outline-none'
            >
              <svg class='w-4 h-4 mx-2 fill-current' viewBox='0 0 24 24'>
                <path d='M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z'></path>
              </svg>

              <span class='hidden mx-2 sm:inline'>Sign in with Google</span>
            </button>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar
