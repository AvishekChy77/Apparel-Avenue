import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";
import Navbar from "./Shared/Navbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BrandDetails = () => {
  const [getProduct, setGetProduct] = useState();
  const brands = useLoaderData();
  const { id } = useParams();
  const Sbrand = brands.find((brand) => brand._id === parseInt(id));
  const { _id, img2, brand, img3, img1 } = Sbrand || {};

  useEffect(() => {
    fetch(
      "https://apparel-avenue-server-2yr8yuxal-avisheks-projects.vercel.app/product"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGetProduct(data);
      });
  }, []);

  const brandProducts = getProduct?.filter(
    (product) => product.brand === Sbrand.brand
  );
  console.log("all", brands, getProduct, brandProducts);

  return (
    <div>
      <Navbar></Navbar>
      <h2 className=" text-xl md:text-3xl mt-10 mb-5 font-semibold">
        TRENDING CLASSICS: SHOP THE LOOK
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img className="h-[85vh] w-full object-cover" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[85vh] w-full object-cover" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[85vh] w-full object-cover" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
      <h2 className="text-center text-xl md:text-3xl mt-20 mb-10 font-semibold">
        Available {brand} Products
      </h2>
      <div className="grid mb-10 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brandProducts?.length > 0 ? (
          brandProducts.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))
        ) : (
          <p>Sorry, no products available from {brand}</p>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
