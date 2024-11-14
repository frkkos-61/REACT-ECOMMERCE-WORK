import { createContext, useEffect, useState } from "react";

import api from "./../Apı/index";

//! 1.adım : Context yapısının temelini oluştur
export const ProductContext = createContext();

//! 2.adım: Context yapısında tutulacak verileri/fonksiyonları ve bunları diğer bileşenlere aktaracak sağlayıcıyı tanımla

export const ProductProvider = ({ children }) => {
  //* Sağlayıcı içerisinde tutulacak stateleri tanımlarız
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? `/products`
        : `/products/category/${selectedCategory}`;

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  //*3.Adım: Uygulamaya sağlanacak verileri belirle
  return (
    <ProductContext.Provider value={{ products, selectedCategory,setSelectedCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
