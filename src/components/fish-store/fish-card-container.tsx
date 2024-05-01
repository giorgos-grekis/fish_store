"use client";
// import { fishes } from "@/utils/mockup-data";
import Card from "./card/card";
import { useFishesContext } from "@/providers/context-provider";

const FishCardContainer = () => {
  const { fishes } = useFishesContext();
  return (
    <>
      {fishes.map((fish) => (
        <Card key={fish.id} fish={fish} />
      ))}
    </>
  );
};

export default FishCardContainer;
