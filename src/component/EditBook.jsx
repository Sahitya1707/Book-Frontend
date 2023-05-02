import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  const [datas, setDatas] = useState("");
  const [item, setItem] = useState({
    bookName: "",
    author: "",
    publisher: "",
    isbn: "",
    description: "",
    date: "",
  });
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/book/show-book/${id}`
      );
      // console.log(response);
      // setDatas(response.data.book);
      setItem({
        bookName: response.data.book.bookName,
        author: response.data.book.author,
        publisher: response.data.book.publisher,
        isbn: response.data.book.isbn,
        description: response.data.book.description,
        date: response.data.book.date.slice(0, 10),
      });
      // console.log(response);
    };
    fetchData();

    // console.log(`hi`);
  }, [id]);
  // console.log(item);
  // console.log(datas);

  const inputContent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value);

    setItem({ ...item, [e.target.name]: e.target.value });
    // console.log(`hi`);
  };
  const updateData = async () => {
    // console.log(`hi`);
    const response = await axios.put(
      `http://localhost:8080/api/book/update/${id}`,
      item
    );
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Book-detail has been update",
      showConfirmButton: false,
      timer: 1500,
      // height: 100,
      heightAuto: false,
      // height: "10rem",
    });
    // console.log(response);
    navigate("/");
  };
  // console.log(datas.author);
  return (
    <>
      <div className="text-white text-center">
        <p className="uppercase  font-bold tracking-wider text-5xl  my-3">
          Edit Book
        </p>
        <p className="text-xl">Update Book Detail</p>
        <div className="my-3 mx-auto w-[30rem]">
          <Form
            heading="Bookname"
            name="bookName"
            type="text"
            value={item.bookName}
            placeholder="Update your Bookname"
            inputContent={inputContent}
          />
          <Form
            heading="Author"
            inputContent={inputContent}
            name="author"
            type="text"
            value={item.author}
            placeholder="Update the Author"
          />
          <Form
            inputContent={inputContent}
            heading="Publisher"
            name="publisher"
            type="text"
            value={item.publisher}
            placeholder="Update the publisher"
          />
          <Form
            inputContent={inputContent}
            heading="Isbn"
            name="isbn"
            type="text"
            value={item.isbn}
            placeholder="Update the isbn"
          />
          <Form
            inputContent={inputContent}
            heading="Description"
            name="description"
            type="text"
            value={item.description}
            placeholder="Update the Description"
          />
          <Form
            inputContent={inputContent}
            heading="Published Date"
            name="date"
            type="date"
            value={item.date}
            placeholder="Update the Date"
          />
          <button
            className="bg-[#00eaff] py-3 text-black uppercase text-2xl font-semibold  rounded w-[100%] my-3 hover:bg-[#74e5f0] transition-all ease-in duration-150 "
            onClick={updateData}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};
const Form = (props) => {
  return (
    <>
      <p className="text-left text-[#f3d9f5] text-xl">{props.heading}</p>
      <input
        type={props.type}
        className="w-[100%] py-2 my-2 rounded text-black px-2"
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.inputContent}
      />
    </>
  );
};

export default EditBook;
