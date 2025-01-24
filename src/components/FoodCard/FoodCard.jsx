import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';


const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const { userStatus } = useAuth();
  const handleAddToCart = () => {
    if (userStatus && userStatus.email) {
      const cartItem = {
        menuId: _id,
        email: userStatus.email,
        name,
        image,
        price,
      }
      axiosSecure.post('/carts', cartItem)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is successfully added.`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      })

    } else {
      Swal.fire({
        title: "Please login to add to the cart.",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;