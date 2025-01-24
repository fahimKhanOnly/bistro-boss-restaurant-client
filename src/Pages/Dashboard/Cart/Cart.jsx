import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {
  const secureAxios = useAxiosSecure();
  const [cart, refetch] = useCart();
  const total_price = cart.reduce((a, b) => a + b.price, 0);

  const deleteHandler = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios.delete(`/carts/${id}`)
          .then(result => {
            if (result.data.deletedCount === 1) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div>
      <div>
        <h2 className="text-6xl">Items: {cart.length}</h2>
        <h2 className="text-6xl">Total Price: {total_price}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, idx) => <tr key={item._id}>
                <th>
                  <label>
                    {idx + 1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                  <br />
                </td>
                <td>{item.price}</td>
                <th>
                  <button onClick={() => deleteHandler(item._id)} className="btn btn-xs text-xl text-red-500"><FaTrashAlt /></button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;