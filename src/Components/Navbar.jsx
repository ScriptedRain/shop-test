import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { Disclosure, Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function header(props) {
  const isCurrent = (props, target) => {
    if (props === target) {
      return true;
    } else return false;
  };

  const navigation = [
    {
      name: "Home",
      href: "/team",
      current: isCurrent(props.currentPage, "home"),
    },
    {
      name: "team",
      href: "/team",
      current: isCurrent(props.currentPage, "team"),
    },
    {
      name: "Weather App",
      href: "/app",
      current: isCurrent(props.currentPage, "app"),
    },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoIosClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6 text-pink-400"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/" className="flex-shrink-0 flex items-center">
                  <img
                    src="https://img.icons8.com/color/48/000000/shooting-stars.png"
                    alt="Shooting Stars"
                    className=" transform scale-75"
                  />
                  <h1 className="text-gray-200 font-mono antialiased text-2xl hidden lg:block h-8 w-auto ml-3">
                    {" "}
                    Star Field
                  </h1>
                </a>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 mt-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium",
                          "transition duration-300 ease-in-out transform hover:scale-110"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
