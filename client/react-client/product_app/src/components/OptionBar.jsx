import { React, useState } from "react";

const OptionBar = ({ handleChangeView, viewBy, createNewProduct }) => {
  const defaultForm = {
    name: "",
    description: "",
    price: "",
    available: "",
  };
  const [isCreating, setIsCreating] = useState(false);
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCancel = () => {
    setIsCreating(false);
    setForm(defaultForm);
  };

  return (
    <>
      <div className="flex flex-row justify-around w-6/10 mb-5">
        <div className="w-4/10 text-center border-2 border-solid rounded-md">
          <select
            value={viewBy}
            onChange={(e) => handleChangeView(e.target.value)}
          >
            <option value="all">See all products</option>
            <option value="available">Show only available products</option>
            <option value="unavailable">Show only unavailable products</option>
          </select>
        </div>
        <button
          className="w-4/10 text-center border-2 border-solid rounded-md"
          onClick={() => setIsCreating(true)}
        >
          Create New Product
        </button>
      </div>
      {isCreating && (
        <div className="bg-blue-100 p-4 rounded-md w-6/10">
          <div className="w-5/10 h-10 flex items-center gap-2 px-4">
            <h1>Name:</h1>
            <input
              className="bg-white rounded-md px-2"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-5/10 h-10 flex items-center gap-2 px-4">
            <h1>Description:</h1>
            <input
              className="bg-white rounded-md px-2"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="w-5/10 h-10 flex items-center gap-2 px-4">
            <h1>Price:</h1>
            <input
              className="bg-white rounded-md px-2"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div className="w-5/10 h-10 flex items-center gap-2 px-4">
            <h1>Available:</h1>
            <input
              className="bg-white rounded-md px-2"
              name="available"
              value={form.available}
              onChange={handleChange}
            />
          </div>
          <button onClick={onCancel}>Chancel</button>
          <button onClick={() => createNewProduct({ newProduct: form })}>
            CreateProduct
          </button>
        </div>
      )}
    </>
  );
};

export default OptionBar;
