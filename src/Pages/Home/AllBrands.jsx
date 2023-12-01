import Brand from "./Brand";

const AllBrands = ({ brands }) => {
  return (
    <div className="my-16 max-w-4xl p-4 mx-auto">
      <h2 className="text-center mb-10 font-semibold text-xl md:text-2xl lg:text-3xl">
        Buy from your favourite Brand
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-7 ">
        {brands.map((Sbrand) => (
          <Brand
            key={Sbrand._id}
            Sbrand={Sbrand}
            animation={Sbrand._id % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
          ></Brand>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
