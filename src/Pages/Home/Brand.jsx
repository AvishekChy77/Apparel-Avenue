import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ Sbrand, animation }) => {
  const { _id, brand, image } = Sbrand || {};
  return (
    <div
      data-aos={animation}
      data-aos-easing="linear"
      data-aos-duration="1800"
      className="rounded-md  p-2 bg-base-100 shadow-xl"
    >
      <img className="h-52 w-full object-cover " src={image} alt="" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center mb-5 font-semibold text-xl md:text-2xl lg:text-3xl">
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
