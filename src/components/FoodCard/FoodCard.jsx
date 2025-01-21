import React from 'react';

const FoodCard = ({item}) => {
 const {name, image, price, recipe} = item;

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
      <button className="btn btn-primary">Add to Cart</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default FoodCard;