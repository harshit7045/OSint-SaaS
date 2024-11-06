import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const navigate = useNavigate();
    const handelRegister = () => {
      navigate("/login");
    };
    
  const [numVehicles, setNumVehicles] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVehicleChange = (index, e) => {
    const { name, value } = e.target;
    const newVehicles = [...formData.vehicles];
    newVehicles[index] = { ...newVehicles[index], [name]: value };
    setFormData({ ...formData, vehicles: newVehicles });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain letters, numbers, and special characters.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  let register;
  const registerUser = async () => {
    
    if (!validateForm()) {
      return;
    }

    const userData = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      
    };

    try {
      const response = await fetch(`http://${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}/api/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        handelRegister();
      } else {
        //console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      //console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 max-w-md min-h-[50vh] mx-auto mb-[-5vh] sm:max-w-lg sm:mx-auto sm:p-8 lg:max-w-full lg:mx-0 lg:p-8">
      <form className="lg:w-full lg:flex lg:flex-col lg:items-center">
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>
        
        
        <div className="flex  text-center justify-center w-full">
          <button
            type="button"
            onClick={registerUser}
            className="px-4 py-2 h-[5vh] min-w-[20vw] bg-[#0d7cf2] text-white flex justify-center items-center font-bold rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
