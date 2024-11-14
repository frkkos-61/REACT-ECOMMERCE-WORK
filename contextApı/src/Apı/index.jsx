//* axios' un temel ayarlarının yapıldığı bir örnek oluştur.Proje içerisinde bu örneklerde api isteği atıldığında her seferinden url'i ve default headerları yazmak zorunda kalmayacağız.

import axios from "axios";

//? Özelleştirilmiş kopya oluştururuz, ama her seferinde uzun uzun tanımlamamız gerekiyordu.
// axios.get("https://fakestoreapi.com/products",{header:"content"})
// axios.get("https://fakestoreapi.com/products",{header:"content"})
// axios.get("https://fakestoreapi.com/products",{header:"content"})

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default api;
