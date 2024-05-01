"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { fishes as InitialValue, cartItemsFishes } from "@/utils/mockup-data";
import type { FishType } from "@/components/fish-store/card/card";
import type { PropsWithChildren } from "react";

export type CartItemType = {
  qty: number;
} & FishType;

export type ContextTypes = {
  loading: boolean;
  setLoading: (state: boolean) => void;
  fishes: FishType[];
  setFishes: (fishes: FishType[]) => void;
  cartItems: CartItemType[];
  setCartItems: (fishes: CartItemType[]) => void;
};

export const FishesContext = createContext<ContextTypes>({
  loading: false,
  setLoading: () => {},
  fishes: InitialValue,
  setFishes: () => {},
  cartItems: cartItemsFishes,
  setCartItems: (fishes: FishType[]) => {},
});

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [fishes, setFishes] = useState(InitialValue);
  const [cartItems, setCartItems] = useState(cartItemsFishes);

  useEffect(() => {
    const fishStoreCartAdd =
      localStorage.getItem("fish_store_cart") &&
      JSON.parse(localStorage.getItem("fish_store_cart") ?? "");

    if (fishStoreCartAdd) {
      setFishes(() => fishStoreCartAdd);
    }
  }, []);

  return (
    <FishesContext.Provider
      value={{
        loading,
        setLoading,
        fishes,
        setFishes,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </FishesContext.Provider>
  );
};

export default ContextProvider;

export const useFishesContext = () => useContext(FishesContext);
