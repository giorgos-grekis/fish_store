import { fishes } from "@/utils/mockup-data";
import Card from "./card/card";
import Title from "./title/title";

const FishStore = () => {
  return (
    <div className={`col out-border`}>
      {/* Products List */}
      <div className="">
        <Title />

        {fishes.map((fish) => (
          <Card key={fish.id} fish={fish} />
        ))}
      </div>
    </div>
  );
};

export default FishStore;
