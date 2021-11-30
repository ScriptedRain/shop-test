import { Button1, Button2 } from "./Buttons";
import { Link } from "react-router-dom";
import { authentication } from '../Firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Navbar = ({ currentPageShop }) => {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
    .catch((err) => {
      'null'
    })
  }

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4 pt-4 row-span-2 grid-rows-1 pb-3 bg-gray-800">
        <div className="col-start-4 col-span-1">
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              src="https://img.icons8.com/color/48/000000/shooting-stars.png"
              alt="Shooting Stars"
              className=" transform scale-75"
            />
            <h1 className="text-gray-200 font-mono antialiased text-2xl hidden lg:block h-8 w-auto ml-3">
              U bay
            </h1>
          </a>
        </div>
        <div className="flex">
          <div className="mr-2">
            <Link to="/shop">
              <Button1 name="shop" />
            </Link>
          </div>
          <div>
            <Link to="/team">
              {currentPageShop ? (
                <Button2 name="Team" />
              ) : (
                <Button1 name="Team" />
              )}
            </Link>
          </div>
        </div>
        <div className="col-start-10 col-span-1">
            <button onClick={signInWithGoogle} className='whitespace-nowrap ml-36 px-4 py-2 font-medium tracking-wide text-white transition-colors duration-200 bg-indigo-700 rounded-md hover:bg-indigo-500 hover:scale-105 hover: focus:ring-indigo-300 focus:ring-opacity-80'>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
