import React, { useState } from "react";
import "./PageIndex.css";

const PageIndex = ({ totalPage, setOffset, offset }) => {
  const [startIndex, setStartIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  console.log("offset: ", offset);
  // create a list of page numbers
  let pageNumber = [];
  pageNumber.push("<");
  for (let i = activeIndex-2; i <= activeIndex + 3 && i <= totalPage; i++) {
    if(i > 0)
    pageNumber.push(i);
  }
  pageNumber.push(">");

  return (
    <div className="index-wrapper">
      <ul>
        {pageNumber.map((page, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                if (page === ">") {
                  if (activeIndex + 1 > totalPage) {
                    setStartIndex(activeIndex);
                  } 
                  else if(startIndex + 5 > totalPage){
                    setStartIndex(startIndex);
                  }
                  else {
                    setStartIndex(startIndex + 1);
                    setActiveIndex(startIndex + 1);
                  }
                } else if (page === "<") {
                  if (activeIndex - 1 < 1) {
                    setStartIndex(1);
                    setActiveIndex(1);
                  } else {
                    setStartIndex(startIndex - 1);
                    setActiveIndex(activeIndex - 1);
                  }
                } else {
                  setActiveIndex(page);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
                setOffset(activeIndex * 10 - 10);
              }}
              className={page === activeIndex ? "active" : ""}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageIndex;
