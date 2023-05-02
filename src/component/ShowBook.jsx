import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowBook = () => {
  const { id } = useParams();
  const Swal = require("sweetalert2");
  const navigate = useNavigate();
  const [datas, setDatas] = useState("");
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/book/show-book/${id}`
      );
      // console.log(response);
      setDatas(response.data.book);
    };
    fetchData();
  }, [id]);
  const handleDelete = async () => {
    // console.log(`hi`);
    // console.log(id);
    const response = await axios.delete(
      `http://localhost:8080/api/book/delete/${id}`
    );
    // console.log(response);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Book has been deleted",
      showConfirmButton: false,
      timer: 1500,
      // height: 100,
      heightAuto: false,
      // height: "10rem",
    });
    navigate("/");
  };
  return (
    <>
      <p className="text-white text-center my-7 uppercase tracking-wider text-3xl font-bold">
        Book Details
      </p>
      <div className="flex justify-center mt-5 flex-col items-center">
        <div className="mx-auto text-[#00ff73]  text-2xl uppercase">
          <img
            src={`http://localhost:8080/book-images/${datas.image}`}
            alt=""
            className="w-[20rem] h-[25rem]"
          />
          <div>
            <p className="tracking-wider my-4">Bookname: {datas.bookName}</p>
            <p className="tracking-wider my-4">Author: {datas.author}</p>
            <p className="tracking-wider my-4">Isbn: {datas.isbn}</p>
            <p className="tracking-wider my-4">Published Date: {datas.date}</p>
            <p className="tracking-wider my-4">Publisher: {datas.publisher}</p>
            <p className="tracking-wider my-4">
              Description: {datas.description}
            </p>
          </div>
        </div>
        <div className="w-[30rem] flex justify-between ">
          <Button name="Delete" class="red" buttonClick={handleDelete} />
          <Link to={`/edit-book/${id}`}>
            <Button name="Edit" class="blue" />
          </Link>
        </div>
      </div>
    </>
  );
};
const Button = (props) => {
  return (
    <>
      <button
        className={` px-[20px] py-[15px] bg-[${props.class}] text-[white] border-[white] font-bold border-2 cursor-pointer uppercase rounded mx-5 my-5 transition-all duration-200 ease-out hover:border-[#2c3e50] hover:bg-[white] hover:text-[${props.class}] hover:border-2 px-10`}
        onClick={props.buttonClick}
      >
        {props.name}
      </button>
    </>
  );
};

export default ShowBook;
