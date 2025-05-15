import { IPosts } from '@/app/(users)/api/blog/types';
import React from 'react';

const baseUrl = 'http://localhost:3000';
const getPosts = async (): Promise<IPosts[]> => {
  const response = await fetch(`${baseUrl}/api/blog`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts: IPosts[] = await response.json();
  return posts;
};

const BlogList = async () => {
  let posts: IPosts[] = [];

  try {
    posts = await getPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
    posts = [];
  }
  const fn = () => {};
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.length === 0 && <p>No posts available.</p>}
        {posts.map(post => (
          <li key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 dark: text-black">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
