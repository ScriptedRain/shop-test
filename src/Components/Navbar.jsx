import { Button1, Button2 } from "./Buttons";
import { Link } from "react-router-dom";

const Navbar = ({ currentPageShop }) => {
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
          <Link to="/Login">
            <Button1 name="Login / Signup" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
