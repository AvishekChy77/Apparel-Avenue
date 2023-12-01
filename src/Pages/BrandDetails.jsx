import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Navbar from "./Shared/Navbar";
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
      <div className="carousel mb-10 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="w-full h-56 md:h-96 lg:h-[85vh] relative rounded"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              onClick={() => scrollToSlide("#slide4")}
              href="#slide4"
              className="btn btn-circle "
            >
              ❮
            </a>
            <a
              onClick={() => scrollToSlide("#slide2")}
              href="#slide2"
              className="btn btn-circle "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="w-full h-56 md:h-96 lg:h-[85vh] relative rounded"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              onClick={() => scrollToSlide("#slide1")}
              href="#slide1"
              className="btn btn-circle "
            >
              ❮
            </a>
            <a
              onClick={() => scrollToSlide("#slide3")}
              href="#slide3"
              className="btn btn-circle "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="w-full h-56 md:h-96 lg:h-[85vh] relative rounded"
            style={{
              backgroundImage: `url(${img3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              onClick={() => scrollToSlide("#slide2")}
              href="#slide2"
              className="btn btn-circle "
            >
              ❮
            </a>
            <a
              onClick={() => scrollToSlide("#slide1")}
              href="#slide1"
              className="btn btn-circle "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <h2 className=" text-xl md:text-3xl my-5 font-semibold">
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
