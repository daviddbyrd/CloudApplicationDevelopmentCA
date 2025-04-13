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
    return;
  }

  return isEditing ? (
    <div className="bg-blue-100 p-4 rounded-md w-6/10">
      <input name="name" value={form.name} onChange={handleChange} />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <input name="price" value={form.price} onChange={handleChange} />
      <input name="available" value={form.available} onChange={handleChange} />
      <button onClick={onCancel}>Chancel</button>
      <button onClick={() => onSaveEdit({ id, updatedProduct: form })}>
        Save Changes
      </button>
    </div>
  ) : (
    <div className="bg-blue-100 p-4 rounded-md">
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{description}</h1>
      <h1>€{price}</h1>
      <h1>{available}</h1>
      <div>
        <button
          className="border-2 border-solid"
          onClick={() => deleteProduct(id)}
        >
          Delete
        </button>
        <button className="border-2 border-solid" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Product;
