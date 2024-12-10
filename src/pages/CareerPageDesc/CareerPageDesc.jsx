// import React from 'react'
import { useParams } from "react-router-dom";
import { techData, contentData, dmData, opsData } from "../Career/CareerData";

const CareerPageDesc = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  const completeData = [...techData, ...contentData, ...dmData, ...opsData];

  console.log(techData);

  console.log(completeData);

  // const currentItem = completeData.find((item) => item.id === id)
  const clickedItem = completeData.find((item) => item.id === numericId);

  console.log(clickedItem);
  //   const clickedId = techData.map((item , id) =>)

  return (
    <div>
      {clickedItem ? (
        <div>
          <h2>{clickedItem.title}</h2>
          <p>Location: {clickedItem.location}</p>
          <p>{clickedItem.description1}</p>
          <p>{clickedItem.description2}</p>
        </div>
      ) : (
        <h2>Item not found</h2>
      )}
    </div>
  );
};

export default CareerPageDesc;
