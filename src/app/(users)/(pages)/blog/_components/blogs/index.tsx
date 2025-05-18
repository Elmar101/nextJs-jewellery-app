import { IPosts } from '@/app/(users)/api/blog/types';
import React from 'react';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://next-js-15-jewellery-app.vercel.app'
    : 'http://localhost:3000';
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.length === 0 && <p>No posts available.</p>}
        {posts.map(post => (
          <li key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 dark: text-black">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(post) }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
