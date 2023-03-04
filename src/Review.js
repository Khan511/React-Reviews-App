import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image, text, job } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomNumber = () => {
    let randomNum = Math.trunc(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt="review" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </div>
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <div>
        <button onClick={randomNumber} className="random-btn">
          Suprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { id, name, image, text, job } = people[index];

//   const checkNumber = (number) => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };

//   const nextPerson = () => {
//     setIndex((preState) => {
//       const newIndex = preState + 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const prevPerson = () => {
//     setIndex((preState) => {
//       const newIndex = preState - 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const showRandomPerson = () => {
//     setIndex(Math.trunc(Math.random() * people.length));
//   };
//   return (
//     <article>
//       <div className="img-container">
//         <img className="person-img" src={image}></img>
//         <span>
//           <FaQuoteRight></FaQuoteRight>
//         </span>
//         <div>
//           <h3>{name}</h3>
//           <p>{job}</p>
//           <p>{text}</p>
//         </div>
//       </div>
//       <button onClick={prevPerson}>
//         <FaChevronLeft></FaChevronLeft>
//       </button>
//       <button onClick={nextPerson}>
//         <FaChevronRight></FaChevronRight>
//       </button>
//       <button onClick={showRandomPerson}>Random Person</button>
//     </article>
//   );
// };

// export default Review;
