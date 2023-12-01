import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Shared/Navbar";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, price, image, rating } = product;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const UpdatedProduct = {
      name,
      brand,
      type,
      price,
      image,
      rating,
    };
    console.log(UpdatedProduct);

    // sending data to the server
    fetch(
      `https://apparel-avenue-server-2yr8yuxal-avisheks-projects.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className=" text-3xl mt-10 text-center mb-5 font-semibold">
        Update selected product: {name}
      </h2>
      <div className=" max-w-2xl mx-auto p-5 flex justify-center mb-10 bg-emerald-50 rounded-md shadow-xl">
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                name="brand"
                defaultValue={brand}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="type"
                name="type"
                defaultValue={type}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                defaultValue={price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image"
                name="image"
                defaultValue={image}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">rating</span>
              </label>
              <input
                type="text"
                placeholder="rating"
                name="rating"
                defaultValue={rating}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className=" text-center">
            <button className="btn btn-wide bg-blue-700 text-white font-semibold my-3">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
