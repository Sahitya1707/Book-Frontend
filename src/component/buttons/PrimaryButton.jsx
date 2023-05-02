import React from "react";

const PrimaryButton = (props) => {
  return (
    <button className=" px-[20px] py-[15px] bg-[#2c3e50]  text-[white] border-[white] font-bold border-2 cursor-pointer uppercase rounded mx-5 my-5 transition-all duration-200 ease-out hover:border-[#2c3e50] hover:bg-[white] hover:text-[#2c3e50] hover:border-2">
      {props.name}
    </button>
  );
};

export default PrimaryButton;
