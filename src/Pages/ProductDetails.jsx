import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Shared/Navbar";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const products = useLoaderData();
  const { id } = useParams();
  const product = products?.find((product) => product._id === id);
  const { name, image, rating, type, brand, price, description } =
    product || {};

  const handleCart = () => {
    const email = user.email;
    const userData = {
      email,
      name,
      type,
      image,
      rating,
      brand,
      price,
      description,
    };

    fetch(
      "https://apparel-avenue-server-2yr8yuxal-avisheks-projects.vercel.app/user",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product added to cart successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className=" text-xl md:text-3xl mt-10 mb-5 font-semibold">{name}</h2>
      <div className="card text-black mb-10 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Brand: {brand}</p>
          <p>Rating: {rating}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button onClick={handleCart} className="btn btn-primary btn-sm">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
