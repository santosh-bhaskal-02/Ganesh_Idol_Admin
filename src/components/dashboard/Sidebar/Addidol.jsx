import React, { useState } from "react";

const Addidol = () => {
  const [formData, setFormData] = useState({
    idolName: "",
    quantity: 1,
    type: "",
    size: 1,
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Add New Idol
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Idol Name
              </label>
              <input
                type="text"
                name="idolName"
                value={formData.idolName}
                onChange={handleChange}
                required
                className="mt-1 px-4 py-3 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter idol name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="mt-1 px-4 py-3 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter quantity"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="mt-1 px-4 py-3 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Type</option>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="wood">Wood</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Size (1 - 25 feet)
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="mt-1 px-4 py-3 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {[...Array(25)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1} feet
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="mt-1 px-4 py-3 w-full border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter price"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
                required
                className="mt-1 px-4 py-3 w-full border rounded-lg shadow-sm focus:outline-none"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addidol;
