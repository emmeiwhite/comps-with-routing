import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    // This is a good logic to toggle clicking on the expanded accordion title, in which case, we'll make it  closed
    if (expandedIndex === index) {
      //   setExpandedIndex(-1);
      setExpandedIndex((prevIndex) => -1);
    } else {
      //   setExpandedIndex(index);
      setExpandedIndex((prevIndex) => index);
    }
  };

  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const icon = (
          <span className="text-xl">
            {isExpanded ? <GoTriangleUp /> : <GoTriangleDown />}{" "}
          </span>
        );

        return (
          <div
            key={item.id}
            className="accordion border-x border-t rounded"
          >
            <h1
              onClick={() => handleClick(index)}
              className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer "
            >
              {item.heading} {icon}
            </h1>
            {isExpanded && <p className="border-b p-5">{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}
