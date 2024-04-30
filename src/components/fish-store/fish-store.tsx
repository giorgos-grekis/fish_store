import { fishes } from "@/utils/mockup-data";
import Card from "./card/card";
import Title from "./title/title";

const FishStore = () => {
  return (
    <section className={`col out-border`}>
      {/* Products List */}
      <div className="">
        <Title />

        {fishes.map((fish) => (
          <Card key={fish.id} fish={fish} />
        ))}
      </div>
    </section>
  );
};

export default FishStore;
