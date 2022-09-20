import React from "react";

const Terminator = ({ id, name, serialNumber }) => {
  return (
    <div className='tc bg-light-gray dib br3 pa3 ma2 grow'>
      <img src={`https://robohash.org/${id}?size=180x180`} alt="terminátor" />
      <div>
        <h2>{name}</h2>
        <p>{serialNumber}</p>
      </div>
    </div>
  );
};
export default Terminator;
