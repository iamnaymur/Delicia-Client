import React, { useEffect, useState } from "react";
import ChiefCards from "./ChiefCards";

const ChiefsSection = () => {
  const [Chiefs, setChiefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chiefs")
      .then((res) => res.json())
      .then((data) => setChiefs(data));
  }, []);
  return (
    <div>
      <p className="text-3xl">All our best chiefs are here below</p>
      {Chiefs.map(chiefCard=><ChiefCards chiefCard={chiefCard} key={chiefCard.id} ></ChiefCards>)}
    </div>
  );
};

export default ChiefsSection;
