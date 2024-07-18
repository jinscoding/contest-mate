import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/common/banner/Banner";
import Button from "../components/common/Button";
import PostList from "../components/posts/PostList";
import CategoryList from "../components/category/CategoryList";
import { categories, posts } from "../data/dummyData";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredPosts = selectedCategories.length
    ? posts.filter((post) =>
        selectedCategories.every((category) =>
          post.categories.includes(category)
        )
      )
    : posts;

  const handleClick = () => {
    navigate("/posts");
  };

  return (
    <>
      <Banner />
      <div className='bg-white p-3 flex mx-auto my-auto'>
        <CategoryList
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
        />
        <PostList posts={filteredPosts} />
        <div className='w-1/6 p-3 flex flex-col'>
          <Button color='blue' size='large' onClick={handleClick}>
            모집하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
