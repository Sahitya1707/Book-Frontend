import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./buttons/PrimaryButton";
import axios from "axios";
import SingleBook from "./SingleBook";

const BookList = () => {
  const [datas, setDatas] = useState("");
  const [id, setId] = useState("");
  // const getId = (e) => {
  //   setId(e.target.id);
  // };
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/book/get-books"
      );
      // console.log(response.data.books);
      setDatas(response.data.books);
    };
    fetchData();
  }, []);
  return (
    <>
      <p
        className="text-center uppercase my-[10px] text-3xl text-white font-semibold tracking-wider
        "
      >
        Books List
      </p>
      <Link to="/create-book" className="absolute top-[1rem] right-[0.5rem]">
        <PrimaryButton name="+ Add Books" />
      </Link>
      <div className="grid relative w-[70rem]  mx-w-[80rem]  mx-auto my-[4rem] p-4 gap-x-2 gap-y-8 grid-cols-3 items-center ">
        {datas &&
          datas.map((data, i) => {
            return (
              <SingleBook
                key={i}
                bookName={data.bookName}
                author={data.author}
                description={data.description}
                image={data.image}
                id={data._id}
              />
            );
          })}
      </div>
    </>
  );
};

export default BookList;
