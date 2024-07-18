import React from "react";
import { FaRegSadCry } from "react-icons/fa";
import Title from "../common/Title";

interface Post {
  id: number;
  title: string;
  categories: string[];
  content: string;
  createdAt: string;
  createdBy: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className='w-4/6 p-3 grid grid-cols-3 gap-4'>
      {sortedPosts.length === 0 ? (
        <div className='flex items-center justify-center col-span-3 h-[500px]'>
          <div className='flex flex-col items-center'>
            <FaRegSadCry size={70} className='mb-3 text-gray-300' />
            <p className='text-gray-500 text-lg'>등록된 모집글이 없습니다.</p>
          </div>
        </div>
      ) : (
        sortedPosts.map((post) => (
          <div
            key={post.id}
            className='border p-4 rounded shadow transition-transform duration-300 hover:shadow-lg hover:scale-105 h-[250px] flex flex-col cursor-pointer'
          >
            <Title size='small'>{post.title}</Title>

            <div className='text-sm text-gray-600 mt-3 overflow-hidden text-ellipsis'>
              {post.content.length > 150
                ? `${post.content.slice(0, 150)}...`
                : post.content}
            </div>
            <div className='flex justify-between items-end mt-auto text-xs text-gray-400'>
              <span>{post.createdAt}</span>
              <span>{post.createdBy}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
