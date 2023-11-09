"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface ProductForm {
  name: string;
  price: number;
  images: FileList | null;
}

const YourComponent: React.FC = () => {
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    price: 0,
    images: null,
  });

  // ...

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({
        ...formData,
        images: files,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, price, images } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("price", price.toString());
    console.log(images);
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formDataToSend.append(`images[]`, images[i]);
      }
    }

    // Send the formData to your Laravel API
    try {
      const response = await fetch("your-api-endpoint-for-creating-products", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Product created successfully
        // You can redirect the user or display a success message.
      } else {
        // Handle the error response
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  // ...

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
      />
      <input type="file" name="images" multiple onChange={handleImageChange} />
      <div className="image-preview">
        {formData.images &&
          Array.from(formData.images).map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Preview ${index}`}
            />
          ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
