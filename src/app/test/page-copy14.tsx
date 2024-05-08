"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, ChangeEvent, FormEvent } from "react";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProfileImage(file);
  };
  const { data: session } = useSession();
  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const response = await axios
        .post(
          "http://localhost:8000/api/supplier-board/order/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${session?.bearer}`, // Include the bearer token
            },
          }
        )
        .then(async (response: any) => {
          if (response.status == 200) {
          } else if (response.status == 201) {
            console.log(await response.json());
          } else {
            // Handle errors or non-successful responses
            throw new Error(`Request failed with status: ${response.status}`);
          }
        });
      // Clear form inputs after successful registration
      setUsername("");
      setEmail("");
      setPassword("");
      setProfileImage(null);
    } catch (error) {
      // Handle errors
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <label htmlFor="profileImage">Profile Image:</label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
