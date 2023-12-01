import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  const [theme, setTheme] = useState(false);
  const handleClick = () => {
    setTheme(!theme);
    console.log(theme);
  };
  return (
    <div className={` font-Poppins ${theme ? "dark" : "light"}`}>
      <div className="container px-3 mx-auto ">
        <label className="label cursor-pointer justify-end">
          <span className="label-text">Change Theme</span>
          <input onChange={handleClick} type="checkbox" className="toggle" />
        </label>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
