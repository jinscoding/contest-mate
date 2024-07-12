import React from "react";
import Banner from "../components/common/banner/Banner";
import Button from "../components/common/Button";

const Home = () => {
  const handleClick = () => {
    alert(`공모전 모집 게시판입니다.`);
  };

  return (
    <>
      <Banner />
      <div className='bg-white p-3  h-[1200px] mx-auto'>
        <Button color='orange' size='large' onClick={handleClick}>
          모집하기
        </Button>
      </div>
    </>
  );
};

export default Home;
