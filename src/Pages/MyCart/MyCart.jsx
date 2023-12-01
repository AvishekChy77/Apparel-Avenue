import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const userData = useLoaderData();
  const currentUserData = userData?.filter((UD) => UD.email == user.email);
  console.log(currentUserData);
  const [users, setUsers] = useState(currentUserData);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://apparel-avenue-server-2yr8yuxal-avisheks-projects.vercel.app/user/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = users?.filter((u) => u._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className=" text-xl md:text-3xl mt-10 mb-5 font-semibold">
        Your Purchase History
      </h2>
      <div className="grid mb-10 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {users?.length > 0 ? (
          users.map((product) => (
            <div
              key={product._id}
              className="card card-compact w-72 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className=" h-48 w-full object-cover"
                  src={product.image}
                  alt="product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex-grow">{product.name}</h2>

                <div className="flex justify-between items-center">
                  <span>{product.type}</span>
                  <span className=" font-semibold">{product.brand}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Rating: {product.rating}</span>
                  <span>Price: {product.price}</span>
                </div>
                <div className=" text-center">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm btn-warning"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You haven't made a purchase yet</p>
        )}
      </div>
    </div>
  );
};

export default MyCart;
