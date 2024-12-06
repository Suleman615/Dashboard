import React, { createContext, useState } from 'react';

// Initial product details
const initialProductState = {
    name: '',
    subtext: '',
    price: 0,
    category: '',
    otherCategory: '',
    discount: 0,
    metaTitle: '',
    metaKeywords: '',
    Decscription: '',
    previewImage: '',
    colorType: "",
    allImages: [],
    color: '#000000',
};

// Create Context
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(initialProductState);

  // Function to update product details
  const updateProductDetails = (details) => {
    setProduct((prev) => ({ ...prev, ...details }));
  };

   // Function to reset product details
  const resetProductDetails = () => {
    setProduct(initialProductState);
  };

  return (
    <ProductContext.Provider
      value={{ product, updateProductDetails, resetProductDetails }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
