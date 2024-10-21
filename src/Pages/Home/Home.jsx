import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import AllBrands from "./AllBrands";
import Introduction from "./Introduction";
import Reviews from "./Reviews";
import Banner from "./Banner";

const Home = () => {
  const brands = useLoaderData();

  console.log(brands);
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <Introduction></Introduction>
      <AllBrands brands={brands}></AllBrands>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
