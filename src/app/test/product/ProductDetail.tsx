"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Product {
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        <button onClick={prevImage}>Previous</button>
        <Image
          width={250}
          height={250}
          src={product.images[currentImageIndex]}
          alt={product.title}
        />
        <button onClick={nextImage}>Next</button>
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        {/* Add more product details here */}
      </div>
    </div>
  );
};

export default ProductDetail;
