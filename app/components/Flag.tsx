import React from "react";

type Country = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
};

type FlagProps = {
  country: Country;
};

const Flag: React.FC<FlagProps> = ({ country }) => {
  return (
    <div className="flex flex-col items-start m-4">
      <div className="overflow-hidden w-64 h-40 relative">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h2 className="text-left text-lg mt-2">{country.name.common}</h2>
    </div>
  );
};

export default Flag;