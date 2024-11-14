import { createContext, useState } from "react"; //*1.adım
import { toast } from "react-toastify";
export const BasketContext = createContext(); //*2.adım



//*3.adım
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  //*Sepete yeni ürün ekle
  const addToBasket = (product) => {
    //*Sepete eklenmeye çalışılan ürünü sepette ara
    const found = basket.find((i) => i.id === product.id);

    if (!found) {
      //*Ürün sepette yoksa sepete ekle
      setBasket(basket.concat({ ...product, amount: 1 }));

      toast.success("Ürün sepete eklendi");
    } else {
      //*İçerideki ürünleri korurken üzerine yeni eleman eklemeliyiz, yani miktarı artırmalıyız.
      //*Güncel elemanı oluştur.
      const updated = { ...found, amount: found.amount + 1 };
      //*Sepet dizisini güncelle
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));
      //* State'i güncelle
      setBasket(newBasket);

      toast.success(`Ürün sepete eklendi (${updated.amount})`)
    }
  };

  //*Sepetten ürün sil
  const removeFromBasket = (delete_id) => {
    const filtered = basket.filter((i) => i.id !== delete_id);

    setBasket(filtered);
  };

  //*Sepetten ürün miktarı 1'den fazlaysa azalt 1 ise kaldır
  const decreaseAmount = (delete_id) => {
    //*Miktarı azaltacak elemanı bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      //*elemanın miktarı 1 den fazlaysa azalt
      const updated = { ...found, amount: found.amount - 1 };

      //*diziyi güncelledik
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      //*State'i güncelle
      setBasket(newBasket);

      toast.info(`Ürünün miktarı azaltıldı ${updated.amount}`)
    } else {
      //*1'e eşit ise kaldır
      removeFromBasket(delete_id);

      toast.error(`Ürün Sepetten Kaldırıldı`)
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
