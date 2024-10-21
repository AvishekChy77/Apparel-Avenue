import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ Sbrand, animation }) => {
  const { _id, brand, image } = Sbrand || {};
  return (
    <div
      data-aos={animation}
      data-aos-easing="linear"
      data-aos-duration="1800"
      className="rounded-lg p-2 bg-base-100 hover:bg-slate-50 shadow-xl"
    >
      <img className="h-44 w-[80%] mx-auto" src={image} alt="" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center my-5 font-semibold text-xl lg:text-2xl">
          {brand}
        </h2>
        <Link to={`/brand/${_id}`}>
          <button className="btn btn-sm hover:bg-[#124042] bg-[#016A70] text-white">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Brand;
