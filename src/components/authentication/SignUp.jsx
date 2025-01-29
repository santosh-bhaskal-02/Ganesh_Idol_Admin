import React, { useState } from "react";

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Info (Username, Mobile, Email) */}
          {step === 1 && (
            <div className="space-y-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Username"
                required
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Mobile Number"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email"
                required
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-[#008080]  text-white rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Password Info (Password, Confirm Password) */}
          {step === 2 && (
            <div className="space-y-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="New Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm Password"
                required
              />
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#008080]  text-white rounded-md"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}

          {/* Footer with Login Link */}
          <div className="mt-4 text-center">
            <p>
              Do you have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
