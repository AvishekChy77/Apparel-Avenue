import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import AllBrands from "./AllBrands";
import Introduction from "./Introduction";
import Reviews from "./Reviews";

const Home = () => {
  const brands = useLoaderData();

  console.log(brands);
  return (
    <div>
      <Navbar></Navbar>

      {/* banner */}
      <div
        className="w-full flex items-center h-56 md:h-96 relative mb-5 md:my-7 lg:h-[85vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/sywrLVk/image-3.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" absolute left-2 md:left-10  max-w-xl text-center space-y-2">
          <h2 className=" font-extrabold text-2xl md:text-4xl lg:text-6xl">
            Winter Blust
          </h2>
          <p className=" text-sm md:text-xl lg:text-3xl">
            {" "}
            Flat 20% Discount on all porducts
          </p>
        </div>
      </div>
      <Introduction></Introduction>
      <AllBrands brands={brands}></AllBrands>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
