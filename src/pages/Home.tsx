import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/common/banner/Banner";
import Button from "../components/common/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/posts");
  };

  return (
    <>
      <Banner />

      <div className='w-1/6 p-4 flex flex-col '>
        <Button color='orange' size='large' onClick={handleClick}>
          모집하기
        </Button>
      </div>
    </>
  );
};

export default Home;
