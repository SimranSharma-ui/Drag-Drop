import React, { useState } from "react";

const Rating = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue,setHoverValue] = useState(0);
  console.log("hover",hoverValue);
  return (
    <div>
      {Array.from({ length: starCount }).map((_, index) => (
        <span
          key={index}
          onClick={() => setStarValue(index + 1)}
          onMouseEnter={()=>setHoverValue(index+1)}
          onMouseLeave={()=> setHoverValue(0)}
          style={{
            color: index < starValue  || index< hoverValue? "yellow" : "gray", 
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
