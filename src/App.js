// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./component/BookList";
import CreateBook from "./component/CreateBook";
import EditBook from "./component/EditBook";
import ShowBook from "./component/ShowBook";
// import { Toast } from "toaster-js";
// import "toaster-js/default.scss";

const App = () => {
  return (
    <Router>
      <div className="w-[100vw]">
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/show-book/:id" element={<ShowBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
