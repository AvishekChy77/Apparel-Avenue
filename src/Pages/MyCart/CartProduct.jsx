const Product = ({ product }) => {
  const { name, image, rating, type, brand, price } = product || {};
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img className=" h-48 w-full object-cover" src={image} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex-grow">{name}</h2>

        <div className="flex justify-between items-center">
          <span>{type}</span>
          <span className=" font-semibold">{brand}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Rating: {rating}</span>
          <span>Price: {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
