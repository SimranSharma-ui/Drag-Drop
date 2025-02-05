import React, { useRef, useState } from "react";

const DragDrop = ({ intialdata }) => {
  const [data, setdata] = useState(intialdata);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, targetContainer) => {
    e.preventDefault();
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    if (!item || !sourceContainer) return;
    setdata((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
    dragItem.current = null;
    dragContainer.current = null;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "gray",
      }}
    >
      {Object.keys(data).map((container, index) => {
        return (
          <div
            key={index}
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={handleDragOver}
            style={{
              backgroundColor: "gray",
              padding: "1rem",
              width: "250px",
              minHeight: "300px",
            }}
          >
            <h1 style={{ fontSize: "2rem" }}>{container}</h1>
            {data[container].map((item, idx) => {
              return (
                <div
                  key={idx}
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                  draggable
                  style={{
                    padding: "16px",
                    margin: "0 0 8px 0",
                    backgroundColor: "white",
                    cursor: "move",
                    borderRadius: "15px",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DragDrop;
