import React, { useState } from "react";
import "./PageIndex.css";

const PageIndex = ({ totalPage, setOffset, offset,url, setUrl }) => {
  const [startIndex, setStartIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);

  // create a list of page numbers
  let pageNumber = [];
  pageNumber.push("<");
  for (let i = activeIndex-2; i <= activeIndex + 3 && i <= totalPage; i++) {
    if(i > 0)
    pageNumber.push(i);
  }
  pageNumber.push(">");

  const handlePageClick = (page) => {
    if (page === ">") {
      if (activeIndex + 1 > totalPage) {
        setActiveIndex(totalPage);
      } 
      else {
        setActiveIndex(page + 1);
      }
    } else if (page === "<") {
      if (activeIndex - 1 < 1) {
        setActiveIndex(1);
      } else {
        setActiveIndex(page - 1);
      }
    } else {
      setActiveIndex(activeIndex === page ? activeIndex : page);
      console.log("page: ", page);
      console.log("activeIndex: ", activeIndex);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setOffset(page * 10 - 10);
    console.log("offset: ", offset);
    // setUrl(url => `${url}${activeIndex * 10 - 10}`);
  }


  return (
    <div className="index-wrapper">
      <ul>
        {pageNumber.map((page, index) => {
          return (
            <li
              key={index}
              onClick={() => handlePageClick(page)}
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
