"use client";
import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset errors before validation
    setErrors([]);

    // Perform form validation here
    if (formData.username === "") {
      setErrors((prevErrors) => [...prevErrors, "Username is required"]);
    }
    if (formData.email === "") {
      setErrors((prevErrors) => [...prevErrors, "Email is required"]);
    }
    if (formData.password === "") {
      setErrors((prevErrors) => [...prevErrors, "Password is required"]);
    }

    // If there are validation errors, show them in alerts
    if (errors.length > 0) {
      errors.forEach((error) => {
        alert(error);
      });
      return;
    }

    // Send the form data to your backend for registration
    console.log("Form Data:", formData);

    // You can make an API call here to register the user
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
