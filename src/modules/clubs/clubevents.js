import React from "react";
import Cards from "../../components/cards";

const Clubevents = ({ clubInfo, loading }) => {
  return (
    <div className="md:space-y-16">
      <div className="my-10 md:my-0">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-center md:mt-16 px-4 md:px-0">
          Club Events
        </h1>
        <p className="leading-7 text-center">
          The excited events that has been happened so far
        </p>
      </div>

      <Cards
        cardData={clubInfo.event}
        btnText={"Participate"}
        type={"events"}
        loading={loading}
      />
    </div>
  );
};

export default Clubevents;
