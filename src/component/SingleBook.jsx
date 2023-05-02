import React from "react";
import { Link } from "react-router-dom";

const SingleBook = (props) => {
  return (
    <>
      <div className="border-[#1f1f20] border-2 w-[20rem] shadow-xl rounded justify-center">
        <img
          src={`http://localhost:8080/book-images/${props.image}`}
          alt="Book"
          className="w-[100%] h-[15rem] rounded"
        />
        <Link to={`/show-book/${props.id}`}>
          <p className="text-[#319d9c] font-semibold text-2xl tracking-wider px-2 cursor-pointer hover:text-[#46cac8] duration-100 transition-all ease-in">
            {props.bookName}
          </p>
        </Link>
        <p className="text-[#aba8a8] px-2">{props.author}</p>
        <p className="text-white px-2 pb-4">{props.description}</p>
      </div>
    </>
  );
};

export default SingleBook;
