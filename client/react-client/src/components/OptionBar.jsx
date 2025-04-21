import { React, useState } from "react";

const OptionBar = ({ handleChangeView, viewBy, createNewProduct }) => {
  const defaultForm = {
    name: "",
    description: "",
    price: 0,
    available: true,
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

  const onCreate = () => {
    setIsCreating(false);
    createNewProduct({ newProduct: form });
  };

  // I should make it so reloaded or exiting Create Product resets the inputs

  return (
    <>
      <div className="flex flex-row justify-around w-6/10 mb-5">
        <div className="w-4/10 text-center border-2 border-black rounded-md flex items-center justify-center bg-white">
          <select
            className="w-full h-full"
            value={viewBy}
            onChange={(e) => handleChangeView(e.target.value)}
          >
            <option value="all">See all products</option>
            <option value="available">Show only available products</option>
            <option value="unavailable">Show only unavailable products</option>
          </select>
        </div>
        <button
          className="bg-green-200 py-1 px-5 border-2 border-black w-4/10 text-center rounded-md"
          onClick={() => setIsCreating(true)}
        >
          Create New Product +
        </button>
      </div>
      {isCreating && (
        <div className="bg-blue-100 p-4 rounded-md w-6/10 my-10 border-2 border-black">
          <div className="h-10 flex items-center gap-2 px-4">
            <h1>Name:</h1>
            <input
              className="w-full bg-white rounded-md px-2"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="h-10 flex items-center gap-2 px-4">
            <h1>Description:</h1>
            <input
              className="w-full bg-white rounded-md px-2"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="h-10 flex items-center gap-2 px-4">
            <h1>Price:</h1>
            <input
              className="w-full bg-white rounded-md px-2"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div className="h-10 flex items-center gap-2 px-4">
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
              onClick={() => onCreate()}
            >
              Create Product
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OptionBar;
