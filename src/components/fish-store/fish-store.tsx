import Title from "./title/title";
import FishCardContainer from "./fish-card-container";

const FishStore = () => {
  return (
    <section className={`col out-border`}>
      {/* Products List */}
      <div className="">
        <Title />

        <FishCardContainer />
      </div>
    </section>
  );
};

export default FishStore;
