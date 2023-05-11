import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = coffees.filter(cof => cof._id != _id)
              setCoffees(remaining)
            }
          });

        console.log("delete conferm");
      }
    });
  };
  return (
    <>
      <div className="card w-96 glass">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>{taste}</p>
          <div className="card-actions items-center justify-center">
            <button className="btn btn-primary">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCart;
