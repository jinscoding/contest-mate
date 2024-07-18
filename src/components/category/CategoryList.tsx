import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categoryNames } from "../../data/dummyData";

interface CategoryListProps {
  categories: { [key: string]: string[] };
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const CategoryList = ({
  categories,
  selectedCategories,
  onCategoryToggle,
}: CategoryListProps) => {
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({
    frontend: false,
    backend: false,
  });

  const handleMainCategoryToggle = (mainCategory: string) => {
    setExpandedCategories((prevExpandedCategories) => ({
      ...prevExpandedCategories,
      [mainCategory]: !prevExpandedCategories[mainCategory],
    }));
  };

  return (
    <div className='w-1/6 p-4 bg-gray-100 m-3'>
      <h2 className='text-lg font-bold mb-2'>기술 스택</h2>
      <hr />
      <ul>
        <div className='mt-2 ml-2'>
          {Object.keys(categories).map((mainCategory) => (
            <li key={mainCategory} className='mb-3'>
              <h3
                className='text-md text-blue-950 font-semibold mb-2 hover:text-orange-500 cursor-pointer'
                onClick={() => handleMainCategoryToggle(mainCategory)}
              >
                {categoryNames[mainCategory] || mainCategory}
              </h3>
              <AnimatePresence>
                {expandedCategories[mainCategory] && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {categories[mainCategory].map((subCategory) => (
                      <motion.li
                        key={subCategory}
                        className={`cursor-pointer mb-1 p-1 rounded ${
                          selectedCategories.includes(subCategory)
                            ? "text-white bg-orange-300"
                            : "text-orange-500 hover:bg-orange-100"
                        }`}
                        onClick={() => onCategoryToggle(subCategory)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {subCategory}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default CategoryList;
