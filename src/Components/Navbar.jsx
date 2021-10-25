import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4 pt-4 row-span-2 grid-rows-1 pb-3 bg-gray-800">
        <div class="col-start-4 col-span-1">
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
        <div className="col-start-5 flex col-span-1">
          <div className="mr-2">
            <Link to="/shop">
              <Button name="Shop" />
            </Link>
          </div>
          <div>
            <Link to="/team">
              <Button name="Team" />
            </Link>
          </div>
        </div>
        <div class="col-start-10 col-span-1">
          <Link to="/Login">
            <Button name="Login / Signup" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
