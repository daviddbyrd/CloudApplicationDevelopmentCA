import { React, useState } from "react";

const Product = ({
  id,
  name,
  description,
  price,
  available,
  isEditing,
  onEdit,
  onCancel,
  onSaveEdit,
  deleteProduct,
  viewBy,
}) => {
  const [form, setForm] = useState({ name, description, price, available });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (
    (viewBy == "available" && available == false) ||
    (viewBy == "unavailable" && available == true)
  ) {
    console.log(viewBy);
    return;
  } else {
    console.log(`id: ${id}. viewBy: ${viewBy}. available: ${available}`);
  }

  return isEditing ? (
    <div className="bg-blue-100 p-4 border-2 border-black rounded-md">
      <div className="h-10 flex items-center gap-2 px-4">
        <h1>Name:</h1>
        <input
          className="bg-white w-full rounded-md px-2"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="h-10 flex items-center gap-2 px-4">
        <h1>Description:</h1>
        <input
          className="bg-white w-full rounded-md px-2"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className="h-10 flex items-center gap-2 px-4">
        <h1>Price:</h1>
        <input
          className="bg-white w-full rounded-md px-2"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
      </div>
      <div className="h-10 flex items-center gap-2 px-4">
        <h1>Available:</h1>
        <select
          className="bg-white w-full rounded-md px-2"
          name="available"
          value={form.available}
          onChange={handleChange}
        >
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>
      </div>
      <div className="w-full flex flex-row justify-around">
        <button
          className="bg-red-200 py-1 px-5 border-2 border-black rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-green-200 py-1 px-5 border-2 border-black rounded-md"
          onClick={() => onSaveEdit({ id, newProduct: form })}
        >
          CreateProduct
        </button>
      </div>
    </div>
  ) : (
    <div className="bg-blue-100 p-4 border-2 border-black rounded-md">
      <div className="w-full h-10 flex items-center gap-2 px-4">
        <h1>Name:</h1>
        <span className="px-2">{name}</span>
      </div>
      <div className="w-full h-10 flex items-center gap-2 px-4">
        <h1>Description:</h1>
        <span className="px-2">{description}</span>
      </div>
      <div></div>
      <div className="w-full h-10 flex items-center gap-2 px-4">
        <h1>Price:</h1>
        <span className="px-2">€{price}</span>
      </div>
      <div className="w-full h-10 flex items-center gap-2 px-4">
        {available ? <span>Available</span> : <span>Unavailable</span>}
      </div>
      <div className="w-full flex flex-row justify-around">
        <button
          className="bg-red-200 py-1 px-5 border-2 border-black rounded-md"
          onClick={() => deleteProduct(id)}
        >
          Delete
        </button>
        <button
          className="bg-yellow-200 py-1 px-5 border-2 border-black rounded-md"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Product;
