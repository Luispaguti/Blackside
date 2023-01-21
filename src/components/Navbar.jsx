import { useState } from "react";
import { close, logo, menu ,logo1 } from "../assets";
import { navLinks } from "../constant";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  //para hacer el menu mobile//
  return (
    <nav className='w-full flex py-6 px-9 justify-between items-center navbar bg-black'>
      <img src={logo1} alt="bank"
        className="w-[100px] h-[42px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
           font-normal cursor-pointer text-
           [16px] ${index === navLinks.length -
                1 ? "mr-0" : "mr-10"}
          text-white`}
          //Para tener margen right 10 en todos los elementos menos el último//
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          {/* me lleva al inicio de cada uno */}

          </li>
        ))}
      </ul>

      {/* mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
           font-normal cursor-pointer text-
           [16px] ${index === navLinks.length -
                    1 ? "mr-0" : "mb-4"}
          text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>

              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar