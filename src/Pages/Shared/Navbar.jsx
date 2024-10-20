import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };
  const Navbar = (
    <>
      <NavLink className="text-sm 2xl:text-base" to="/">
        Home
      </NavLink>
      <NavLink className="text-sm 2xl:text-base" to="/AddProduct">
        Add Product
      </NavLink>
      <NavLink className="text-sm 2xl:text-base" to="/myCart">
        My Cart
      </NavLink>
      <NavLink className="text-sm 2xl:text-base" to="/register">
        Register
      </NavLink>
    </>
  );
  return (
    <div className="navbar pt-1">
      <div className="w-2/3 md:w-1/2 navbar-start">
        <div className="dropdown text-black">
          <label tabIndex={0} className="btn px-2 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-5 w-4 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 Navbar rounded-box w-52"
          >
            {Navbar}
          </ul>
        </div>
        <div className="font-YSerif flex items-center text-xl md:text-2xl 2xl:text-3xl font-bold">
          <img
            className=" -ml-2 w-14 2xl:w-16"
            src="https://i.ibb.co/nwrZCg0/double-a-letter-logo.png"
            alt=""
          />
          <p>
            <span className=" text-[#016A70]">Apparel</span>
            <span className=" text-[#A2C579]">Avenue</span>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base md:text-lg font-medium flex gap-3 md:gap-7 Navbar">
          {Navbar}
        </ul>
      </div>
      <div className="w-1/3 md:w-1/2 navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-sm bg-[#2c8388] hover:bg-[#016A70] text-white">
              LogIn
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
