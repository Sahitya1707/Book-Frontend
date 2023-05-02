import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./buttons/PrimaryButton";
import axios from "axios";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// import "../index.css";

const CreateBook = () => {
  const [bookDetail, setBookDetail] = useState({
    bookName: "",
    date: "",
    publisher: "",
    author: "",
    description: "",
    isbn: "",
    image: "",
  });
  const formData = new FormData();
  console.log(bookDetail);

  const Swal = require("sweetalert2");
  // new Toast("Welcome");
  //   console.log(bookDetail);
  //   console.log(...bookDetail);
  const inputContent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value);

    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
    // console.log(`hi`);
  };
  // console.log(bookDetail.image);
  // console.log(process.env.DATABASE_URL);
  // const navigate = useNavigate();
  formData.append("bookName", bookDetail.bookName);
  formData.append("date", bookDetail.date);
  formData.append("publisher", bookDetail.publisher);
  formData.append("author", bookDetail.author);
  formData.append("description", bookDetail.description);
  formData.append("isbn", bookDetail.isbn);
  formData.append("image", bookDetail.image);
  console.log(...formData.entries());
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      bookDetail.author !== "" &&
      bookDetail.bookName !== "" &&
      bookDetail.date !== ""
    ) {
      // console.log(`Submit bottom clicked`);
      const response = await axios
        .post(`http://localhost:8080/api/book/add`, formData)
        .then((res) => {
          setBookDetail({
            bookName: "",
            date: "",
            publisher: "",
            author: "",
            description: "",
            isbn: "",
            image: "",
          });

          // console.log(res.data);
          // navigate("/");
          // console.log(response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book has been saved",
            showConfirmButton: false,
            timer: 1500,
            // height: 100,
            heightAuto: false,
            // height: "10rem",
          });
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      // console.log(`hi`);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please fill all the form",
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
        width: 500,
      });
    }
    // console.log(`--This is frontend--`);
    // console.log(response);
  };
  return (
    <div className="w-[100vw]">
      <Link to="/" className="">
        <PrimaryButton name="Show Book" />
      </Link>
      <form
        action="
        "
        className="text-[white]
          my-[2rem]
          border-2 
          border-[#545f6a]
          w-[37rem]
          mx-[auto]
          flex
          flex-col
          bg-[#BF8520]
          rounded-md

          
          "
      >
        <h2 className="text-center uppercase text-2xl font-bold tracking-wider py-4">
          Create Book
        </h2>

        <InputBox
          type="text"
          placeholder="Book Name"
          value={bookDetail.bookName}
          inputContent={inputContent}
          name="bookName"
          required={true}
        />
        <InputBox
          type="text"
          placeholder="Author"
          value={bookDetail.author}
          inputContent={inputContent}
          name="author"
          required={true}
        />
        <InputBox
          type="text"
          placeholder="Publisher of this Book"
          value={bookDetail.publisher}
          inputContent={inputContent}
          name="publisher"
          required={true}
        />
        <InputBox
          type="text"
          placeholder="Describe this Book"
          value={bookDetail.description}
          inputContent={inputContent}
          name="description"
          required={false}
        />
        <InputBox
          type="text"
          placeholder="ISBN"
          value={bookDetail.isbn}
          inputContent={inputContent}
          name="isbn"
          required={false}
        />
        <div className="w-[70%] mx-auto">
          <span className="w-25%">Add Date:</span>
          <input
            type="Date"
            className="rounded my-3 px-2 py-1 ml-[2rem] w-[70%] text-black"
            value={bookDetail.date}
            onChange={inputContent}
            name="date"
            required={false}
          />
        </div>
        <div className="w-[70%]  flex flex-row mx-auto">
          <span className="w-[50%]">Add Image:</span>
          <input
            type="file"
            accept="image/* "
            name="image"
            onChange={(e) =>
              setBookDetail({
                ...bookDetail,
                [e.target.name]: e.target.files[0],
              })
            }
          />
        </div>

        <div className="my-2 mx-auto">
          <button
            className=" px-[30px] py-[15px] bg-[#2c3e50]  text-[white] border-[white] font-bold border-2 cursor-pointer uppercase rounded-xl mx-5 my-5 transition-all duration-200 ease-out hover:border-[#2c3e50] hover:bg-[white] hover:text-[#2c3e50] hover:border-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {/* <PrimaryButton /> */}
        </div>
      </form>
    </div>
  );
};
const InputBox = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className="w-[70%] rounded my-3 px-2 py-1 mx-auto text-[black]"
      value={props.value}
      onChange={props.inputContent}
      required={props.required}
    />
  );
};

export default CreateBook;
